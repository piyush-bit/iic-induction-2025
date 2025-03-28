import React, { useState } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

const domainData = [
  {
    icon: "/icons/electronics.svg",
    title: "Electronics",
    description: "\"where innovation spark cotinections, powering life.\"",
    gradient: "from-blue-900 via-indigo-800 to-purple-900"
  },
  {
    icon: "/icons/mechanical.svg",
    title: "Mechanical",
    description: "\"From gears to gadgets, it powers progress, driving us forward\"",
    gradient: "from-gray-900 via-zinc-800 to-neutral-900"
  },
  {
    icon: "/icons/chemical.svg",
    title: "Chemical",
    description: "\"where molecules dance to the myth of discovery\"",
    gradient: "from-teal-900 via-green-800 to-emerald-900"
  },
  {
    icon: "/icons/cs.svg",
    title: "CS",
    description: "\"the language of innovation, where algorithms unlock the potential\"",
    gradient: "from-sky-900 via-cyan-800 to-blue-900"
  },
  {
    icon: "/icons/management.svg",
    title: "Management",
    description: "\"Lead, adapt, succeed: It is the art of turning vision into reality.\"",
    gradient: "from-rose-900 via-red-800 to-orange-900"
  }
];

export default function DomainCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl bg-gray-900/50 rounded-2xl overflow-hidden shadow-2xl border border-gray-800 backdrop-blur-sm">
        {/* Carousel Section */}
        <div className="w-full p-6 flex items-center justify-center">
          <Carousel 
            opts={{
              align: "start",
            }}
            onSelect={(api) => {
              if (api) {
                setActiveSlide(api.selectedScrollSnap())
              }
            }}
            className="w-full"
          >
            <CarouselContent>
              {domainData.map((domain, index) => (
                <CarouselItem key={index} className="md:basis-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className={`bg-gradient-to-br ${domain.gradient} border-none`}>
                      <CardContent className="flex items-center justify-center p-12">
                        <motion.img 
                          src={domain.icon} 
                          alt={`${domain.title} icon`} 
                          className="max-w-full max-h-64 object-contain transform transition-transform hover:scale-110"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -bottom-2 left-0 right-0 flex justify-center space-x-2 p-2">
              <CarouselPrevious className="text-white bg-gray-700/50 hover:bg-gray-600/50" />
              <CarouselNext className="text-white bg-gray-700/50 hover:bg-gray-600/50" />
            </div>
          </Carousel>
        </div>

        {/* Description Section */}
        <motion.div 
          className="flex flex-col justify-center space-y-4 p-6 text-white"
          key={activeSlide}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            {domainData[activeSlide].title}
          </h2>
          <p className="text-xl text-gray-300 italic border-l-4 border-white pl-4">
            {domainData[activeSlide].description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}