import React, { useState } from "react";
import { Upload, Download, Tag, Loader2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ticketTemplate from "./New_Ticket.png"; // Ensure this path is correct
import BackgroundBeams from "../BackgroundBeams/BackgroundBeams";


const Ticket = () => {
  const [count,setCount]=useState();
  const [loading,setLoading]=useState();
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    branch: "",
    registrationNumber: "",
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [ticketPreview, setTicketPreview] = useState(null);

  const handleInputChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const createTicketImage = async (id) => {
    return new Promise((resolve) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = ticketTemplate;

        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // Define text box properties
            const textBoxWidth = 300; // Width of the text box
            const textBoxHeight = 60; // Height of the text box
            const leftPadding = 40;  // Position where the original username was
            const textY = 350;        // Y position of the text
            const boxY = textY - textBoxHeight + 20; // Adjust for vertical positioning

            // Draw the text box with a visible color
            ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // Semi-transparent black box
            ctx.fillRect(leftPadding, boxY, textBoxWidth, textBoxHeight);

            // Set text properties
            ctx.fillStyle = "#fff"; // White text color
            ctx.font = "bold 40px Inter, sans-serif";
            ctx.textAlign = "left"; // Temporarily set to left to measure text width

            // Measure text width
            const textWidth = ctx.measureText(formData.userName).width;
            
            // Calculate x-position to center text inside the box
            const textX = leftPadding + (textBoxWidth - textWidth) / 2;

            // Draw centered text
            ctx.fillText(formData.userName, textX, textY);

            // Save the current context state for rotated text
            ctx.save();
            
            // Set text properties for rotated text
            ctx.fillStyle = "#000";
            ctx.font = "bold 40px Inter, sans-serif";
            
            // Move to the position where you want the rotated text to be
            const rotatedTextX = canvas.width - 50; // Distance from right edge
            const rotatedTextY = canvas.height / 2; // Vertical center
            
            // Translate to the position where we want to rotate around
            ctx.translate(rotatedTextX, rotatedTextY);
            
            // Rotate -90 degrees (anticlockwise)
            ctx.rotate(-Math.PI / 2);
            
            // Set text alignment for rotated text
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            
            
            
            
            // Draw the rotated text at (0,0) since we've already translated
            ctx.fillText(7000+id, 0, -40);
            
            // Restore the context to its original state
            ctx.restore();

            if (selectedImage) {
                const profileImg = new Image();
                profileImg.src = selectedImage;
                profileImg.onload = () => {
                    ctx.save();
                    ctx.beginPath();
                    ctx.arc(193, 173, 128, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.clip();
                    ctx.drawImage(profileImg, 68, 48, 255, 255);
                    ctx.restore();
                    resolve(canvas.toDataURL("image/png"));
                };
            } else {
                resolve(canvas.toDataURL("image/png"));
            }
        };
    });
};



  const handleGenerateTicket = async () => {
    if (!formData.userName || !formData.userEmail || !formData.branch || !formData.registrationNumber) {
      alert("Please fill in all fields.");
      return;
    }

    const BACKEND_URI = import.meta.env.VITE_BACKEND_URI;
    setLoading(true)
    const response = await fetch(BACKEND_URI+"/api/students/count", {
      method: "GET",
    })
    const c = await response.json();
    setLoading(false)
    setCount(c.count);


    await new Promise(resolve => setTimeout(resolve, 200));
    

    const ticketDataUrl = await createTicketImage(Number(c.count));
    fetch(BACKEND_URI+"/api/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name : formData.userName,
        email : formData.userEmail,
        department : formData.branch,
        registration : formData.registrationNumber
      }),
    }).then((res) => res.json());
    setTicketPreview(ticketDataUrl);
    setShowPreview(true);
  };

  const handleDownloadTicket = () => {
    const link = document.createElement("a");
    link.href = ticketPreview;
    link.download = `${formData.userName}_Eterno_Horizon_Ticket.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      
      <Card className="max-w-2xl mx-auto bg-white z-[1000] ">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold text-center">
            <Tag className="w-6 h-6" />
            Eterno Horizon Ticket 2025
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Label htmlFor="userName">Name</Label>
            <Input
              id="userName"
              value={formData.userName}
              onChange={handleInputChange("userName")}
              required
              pattern="^[a-zA-Z\s]+$"
              title="Only letters and spaces allowed"
            />
            <Label htmlFor="userEmail">Email</Label>
            <Input
              id="userEmail"
              type="email"
              value={formData.userEmail}
              onChange={handleInputChange("userEmail")}
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Invalid email address"
            />
            <Label htmlFor="branch">Branch</Label>
            <Input
              id="branch"
              value={formData.branch}
              onChange={handleInputChange("branch")}
              required
              pattern="^[a-zA-Z\s]+$"
              title="Only letters and spaces allowed"
            />
            <Label htmlFor="registrationNumber">Registration Number</Label>
            <Input
              id="registrationNumber"
              type="number"
              value={formData.registrationNumber}
              onChange={handleInputChange("registrationNumber")}
              required
              pattern="^[0-9]+$"
              title="Only numbers allowed"
            />
            <Label>Profile Picture</Label>
            <Input type="file" accept="image/*" onChange={handleProfileImageChange} />
          </div>
          <Button onClick={handleGenerateTicket}>
            {loading ?<><Loader2 className="animate-spin" />
              Please wait</> :
            <><Upload className="w-4 h-4 mr-2" /> Generate Ticket</>
              }
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showPreview} onOpenChange={setShowPreview}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ticket Preview</DialogTitle>
          </DialogHeader>
          {ticketPreview && <img src={ticketPreview} alt="Ticket Preview" className="w-full" />}
          <DialogFooter>
            <Button onClick={handleDownloadTicket}>
              <Download className="w-4 h-4 mr-2" /> Download Ticket
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <BackgroundBeams className="absolute z-[-1]"/>
    </div>
  );
};

export default Ticket;
