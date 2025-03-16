import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Rocket, TrendingUp, ChevronRight, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

const StatsAndAchievements = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Stats Section */}
        <StatisticsSection isVisible={isInView} />
        
        {/* Achievements Section */}
        <AchievementsSection isVisible={isInView} />
      </div>
    </section>
  );
};

const StatisticsSection = ({ isVisible }) => {
  const stats = [
    { 
      icon: Rocket,
      label: "Successful Launches", 
      value: 24,
      suffix: "+",
      color: "text-blue-400" 
    },
    { 
      icon: Users,
      label: "Team Members", 
      value: 150,
      suffix: "+",
      color: "text-purple-400" 
    },
    { 
      icon: Award,
      label: "Awards Won", 
      value: 15,
      suffix: "",
      color: "text-amber-400" 
    },
    { 
      icon: TrendingUp,
      label: "Success Rate", 
      value: 98,
      suffix: "%",
      color: "text-emerald-400" 
    }
  ];

  return (
    <div className="relative">
      {/* Background Elements */}
      <div className="absolute inset-0 flex justify-between overflow-hidden opacity-30">
        <div className="w-64 h-64 bg-blue-500/20 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="w-64 h-64 bg-purple-500/20 rounded-full blur-3xl transform translate-y-1/2" />
      </div>

      {/* Content */}
      <div className="relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-heinch text-white mb-16"
        >
          Our Impact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={stat.label}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ stat, index, isVisible }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = stat.value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isVisible, stat.value]);

  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700"
    >
      <div className={`${stat.color} mb-4`}>
        <Icon className="w-8 h-8" />
      </div>
      
      <div className="space-y-2">
        <div className="flex items-baseline gap-1 font-mono">
          <span className="text-4xl font-bold text-white">
            {count}
          </span>
          <span className="text-2xl text-white">{stat.suffix}</span>
        </div>
        <p className="text-gray-400">{stat.label}</p>
      </div>
    </motion.div>
  );
};

const AchievementsSection = ({ isVisible }) => {
  const achievements = 

  [
    {
      id:1,
      image: `https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/l16.jpg`,
      date: `6 March 2020`,
      title: `Team Infinity Loop wins at L&T's CreaTech`,
      description: `Team Infinity Loop comprising of three sophomores of Idea Innovation Cell put their best foot forward at L&T's CreaTech held in Mumbai in march, 2020 and came out with flying colors being 2nd Runner’s up. Their project "UJJWAL”, a variable intensity light was highly appreciated by the dignitaries.`,
      link:"https://www.facebook.com/ideaclubvssut/photos/a.989653971133184/3028970853868142/?type=3&flite=scwspnss&extid=c71zTiJuuI24AE48",
  },
  {
      id:2,
      image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/tech2.jpg`,
      date:`11 August 2020`,
      title:`Team Tech2Buzz emerged as runners up in Tata Crucible Hackathon 2020.`,
      description:`"Patience, persistence and perspiration make an unbeatable combination for success."
      - Napoleon Hill
      Team Tech2Buzz consisting of Yashraj Panda, Mukesh Nayak, Gyana Ranjan Sahoo, Rohit Kumar Das and Ayush Pandey of Idea Innovation Cell marked their success through their diligent and tenacious efforts and emerged as runners up in Tata Crucible Hackathon 2020.

      Their project on designing a handhold device that can identify the minimal sizes of diamond and can prevent the smuggling of diamonds in stations and airports, was highly appreciated by jury members. Their solution is based on the property of thermal conductivity.
      We heartily congratulate the team for this grand success and wish them the best of everything in their future endeavours as well . Congratulations team Tech2Buzz!`,
      link:``,
  },
  {
      id:3,
      image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img3.png`,
      date:`16 February 2020`,
      title:`Hon'ble Union Minister of Petroleum & Natural Gas and Steel, Shri Dharmendra Pradhan spoke about Team VSLV`,
      description:`Hon'ble Union Minister of Petroleum & Natural Gas and Steel, Shri Dharmendra Pradhan spoke about Team VSLV of VSSUT Burla (Odisha) at the National Startup Conclave organised in New Delhi, by Odisha Corporate Foundation and MSME (Govt of India)`,
      link:``,
  },
  {
      id:4,
      image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img1a.jpg`,
      date:`30 January 2020`,
      title:`Our Team VSLV interacted with Dr. Jitendra Singh Ji, Hon'ble Union Minister of State for Prime Minister Office, Personnel, Public Grievances & Pensions, Dept of Atomic Energy & Space ISRO - Indian Space Research Organization.`,
      description:`Our Team VSLV interacted with Dr. Jitendra Singh Ji, Hon'ble Union Minister of State for Prime Minister Office, Personnel, Public Grievances & Pensions, Dept of Atomic Energy & Space ISRO - Indian Space Research Organization. We also Interacted with IAS Dr. K.P. Krishnan, Secretary, Youth Enterprise- Ministry of Skill Development & Entrepreneurship and with IAS Arvind Padhee, Country Director ICRISAT in a series of strategic meetings with Govt. of India .`,
      link:``,
  },
  {
      id:5,
      image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img2.jpg`,
      date:`2020`,
      title:`Our Team VSLV interacted with Shri.Dharmendra Pradhan ji, Hon'ble Union Minister of Steel & Ministry of Petroleum and Natural Gas, Govt of India.`,
      description:`Our Team VSLV interacted with Shri.Dharmendra Pradhan ji, Hon'ble Union Minister of Steel & Ministry of Petroleum and Natural Gas, Govt of India.`,
      link:``,
  },
  {
      id:6,
      image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img4l.jpg`,
      date:`06 January 2020`,
      title:`Interaction with Dr. K. Sivan`,
      description:`On 6th of January 2020, our Patrons Prof. Atal Chaudhuri ( Hon'ble Vice Chancellor) and Prof. Debadutta Mishra ( Chairman, ISRO Innovation Center) had a very positive meeting with Dr. K Sivan ( Chairman, ISRO- Indian Space Research Organization), Dr. Uma Maheswaran ( Scientific Secretary, ISRO), Mr. Jiwan Kumar Pandit ( Associate Director, HRD-CBPO, ISRO) and other senior officials at ISRO Headquarters, Bangalore. They handed over the citation and the Honoris Causa to India's Rocketman, Dr K.Sivan which had been awarded to him during the 11th Convocation of VSSUT Burla. They further discussed about our future association regarding ISRO Innovation Center. The official MoU between ISRO and VSSUT is expected to be formalized soon.`,
      link:``,
  },
  {
      id:7,
      image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/l14.jpg`,
      date:`16 January 2020`,
      title:`Our two teams made it among the top 100 makers of India in Maker Mela`,
      description:`Our two teams made it among the top 100 makers of India in Maker Mela held at Mumbai in January 2020. The two projects at display - Affordable Cold storage and Sentinal . Both were extremely well received and appreciated by all the attendees.`,
      link:``,
  },
  ]

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-end mb-12"
      >
        <div>
          <h2 className="text-3xl md:text-5xl font-heinch text-white mb-4">Achievements</h2>
          <div className="h-1 w-24 bg-blue-500" />
        </div>
        
        <button className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2">
          <a href="/achievements">View All</a>
          <ChevronRight className="w-4 h-4" />
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {achievements.map((achievement, index) => (
          <AchievementCard 
            key={achievement.title}
            achievement={achievement}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  );
};

const AchievementCard = ({ achievement, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gray-800 rounded-xl overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-sm text-white">
          {achievement.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-2 text-gray-400">
          <Award className="w-4 h-4" />
          <span className="text-xs font-sans ">{achievement.date}</span>
        </div>

        <h3 className="text-2xl font-heinch text-white group-hover:text-blue-400 transition-colors">
          {achievement.title}
        </h3>

        <p className="text-gray-400 text-sm line-clamp-2">
          {achievement.description}
        </p>

        <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm">
          Read More
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default StatsAndAchievements;