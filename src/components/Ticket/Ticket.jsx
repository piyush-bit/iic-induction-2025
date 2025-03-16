import React, { useState, useRef } from "react";
// import logo from "./Ticket.jpg";
import logo from "./New_Ticket.jpg";

import "./Tickets.css";

const Ticket = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [branch, setBranch] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const imageRef = useRef();

  const handleInputChange = (setter) => (event) => setter(event.target.value);

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateTicket = () => {
    if (!userName || !userEmail || !branch || !registrationNumber) {
      alert("Please fill in all fields.");
      return;
    }
    imageRef.current.style.display = "block";
  };

  const handleDownloadTicket = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const ticketImg = new Image();
    ticketImg.src = logo;

    ticketImg.onload = () => {
      canvas.width = ticketImg.width;
      canvas.height = ticketImg.height;
      ctx.drawImage(ticketImg, 0, 0);

      ctx.font = "bold 40px Arial, sans-serif";
      ctx.fillStyle = "#fff";
      ctx.textAlign = "center";
      ctx.fillText(userName, canvas.width / 2, 280);
      ctx.fillText(userEmail, canvas.width / 2, 330);
      ctx.fillText(branch, canvas.width / 2, 380);
      ctx.fillText(registrationNumber, canvas.width / 2, 430);

      if (selectedImage) {
        const profileImg = new Image();
        profileImg.src = selectedImage;

        profileImg.onload = () => {
          ctx.save();
          ctx.beginPath();
          ctx.arc(200, 100, 80, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          ctx.drawImage(profileImg, 120, 20, 160, 160);
          ctx.restore();

          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "Eterno_Horizon_Ticket_2025.png";
          link.click();
        };
      }
    };
  };

  return (
    <div className="flex justify-center items-center mt-20 ">
      <div className="ticket-container">
        <h2 className="ticket-title font-serif">Eterno Horizon Ticket 2025 </h2>

        <div className="input-group">
          <input type="text" placeholder="Enter your name" value={userName} onChange={handleInputChange(setUserName)} />
          <div className="underline"></div>
        </div>

        <div className="input-group">
          <input type="email" placeholder="Enter your email" value={userEmail} onChange={handleInputChange(setUserEmail)} />
          <div className="underline"></div>
        </div>

        <div className="input-group">
          <input type="text" placeholder="Enter your branch" value={branch} onChange={handleInputChange(setBranch)} />
          <div className="underline"></div>
        </div>

        <div className="input-group">
          <input type="text" placeholder="Enter your registration number" value={registrationNumber} onChange={handleInputChange(setRegistrationNumber)} />
          <div className="underline"></div>
        </div>

        <div className="file-upload">
          <input type="file" accept="image/*" onChange={handleProfileImageChange} />
        </div>

        <button className="generate-btn" onClick={handleGenerateTicket}>Generate Ticket</button>

        <div ref={imageRef} className="ticket-preview" style={{ display: "none" }}>
          <img src={logo} alt="Ticket Template" />
          <p>{userName}</p>
          <p>{userEmail}</p>
          <p>{branch}</p>
          <p>{registrationNumber}</p>
          <button className="download-btn" onClick={handleDownloadTicket}>Download Ticket</button>
        </div>
      </div>

    </div>
  );
};

export default Ticket;