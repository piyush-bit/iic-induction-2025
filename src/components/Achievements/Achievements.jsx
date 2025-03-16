import React , {useState} from 'react'
import AchievementCard from './AchievementCard'
function Achievements() {
    const data=[
        {
            id:1,
            image: `https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/l16.jpg`,
            date: `6 March 2020`,
            heading: `Team Infinity Loop wins at L&T's CreaTech`,
            content: `Team Infinity Loop comprising of three sophomores of Idea Innovation Cell put their best foot forward at L&T's CreaTech held in Mumbai in march, 2020 and came out with flying colors being 2nd Runner’s up. Their project "UJJWAL”, a variable intensity light was highly appreciated by the dignitaries.`,
            link:"https://www.facebook.com/ideaclubvssut/photos/a.989653971133184/3028970853868142/?type=3&flite=scwspnss&extid=c71zTiJuuI24AE48",
        },
        {
            id:2,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/tech2.jpg`,
            date:`11 August 2020`,
            heading:`Team Tech2Buzz emerged as runners up in Tata Crucible Hackathon 2020.`,
            content:`"Patience, persistence and perspiration make an unbeatable combination for success."
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
            heading:`Hon'ble Union Minister of Petroleum & Natural Gas and Steel, Shri Dharmendra Pradhan spoke about Team VSLV`,
            content:`Hon'ble Union Minister of Petroleum & Natural Gas and Steel, Shri Dharmendra Pradhan spoke about Team VSLV of VSSUT Burla (Odisha) at the National Startup Conclave organised in New Delhi, by Odisha Corporate Foundation and MSME (Govt of India)`,
            link:``,
        },
        {
            id:4,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img1a.jpg`,
            date:`30 January 2020`,
            heading:`Our Team VSLV interacted with Dr. Jitendra Singh Ji, Hon'ble Union Minister of State for Prime Minister Office, Personnel, Public Grievances & Pensions, Dept of Atomic Energy & Space ISRO - Indian Space Research Organization.`,
            content:`Our Team VSLV interacted with Dr. Jitendra Singh Ji, Hon'ble Union Minister of State for Prime Minister Office, Personnel, Public Grievances & Pensions, Dept of Atomic Energy & Space ISRO - Indian Space Research Organization. We also Interacted with IAS Dr. K.P. Krishnan, Secretary, Youth Enterprise- Ministry of Skill Development & Entrepreneurship and with IAS Arvind Padhee, Country Director ICRISAT in a series of strategic meetings with Govt. of India .`,
            link:``,
        },
        {
            id:5,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img2.jpg`,
            date:`2020`,
            heading:`Our Team VSLV interacted with Shri.Dharmendra Pradhan ji, Hon'ble Union Minister of Steel & Ministry of Petroleum and Natural Gas, Govt of India.`,
            content:`Our Team VSLV interacted with Shri.Dharmendra Pradhan ji, Hon'ble Union Minister of Steel & Ministry of Petroleum and Natural Gas, Govt of India.`,
            link:``,
        },
        {
            id:6,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img4l.jpg`,
            date:`06 January 2020`,
            heading:`Interaction with Dr. K. Sivan`,
            content:`On 6th of January 2020, our Patrons Prof. Atal Chaudhuri ( Hon'ble Vice Chancellor) and Prof. Debadutta Mishra ( Chairman, ISRO Innovation Center) had a very positive meeting with Dr. K Sivan ( Chairman, ISRO- Indian Space Research Organization), Dr. Uma Maheswaran ( Scientific Secretary, ISRO), Mr. Jiwan Kumar Pandit ( Associate Director, HRD-CBPO, ISRO) and other senior officials at ISRO Headquarters, Bangalore. They handed over the citation and the Honoris Causa to India's Rocketman, Dr K.Sivan which had been awarded to him during the 11th Convocation of VSSUT Burla. They further discussed about our future association regarding ISRO Innovation Center. The official MoU between ISRO and VSSUT is expected to be formalized soon.`,
            link:``,
        },
        {
            id:7,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/l14.jpg`,
            date:`16 January 2020`,
            heading:`Our two teams made it among the top 100 makers of India in Maker Mela`,
            content:`Our two teams made it among the top 100 makers of India in Maker Mela held at Mumbai in January 2020. The two projects at display - Affordable Cold storage and Sentinal . Both were extremely well received and appreciated by all the attendees.`,
            link:``,
        },
        {
            id:8,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/l12.jpg`,
            date:`1 January 2020`,
            heading:`Our team was recently Invited to be a part of the Platinum Jubilee celebration of the Rajendra University`,
            content:`Our team was recently Invited to be a part of the Platinum Jubilee celebration of the Rajendra University at Balangir in December 2019 on the premise of completion of its 75 years which had hosted a national level science exhibition.`,
            link:``,
        },
        {
            id:9,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/l13.jpg`,
            date:`14 December 2019`,
            heading:`Team VSLV was invited to ”Young Astronomer Talent Search”`,
            content:`Team VSLV was invited to ”Young Astronomer Talent Search” organized by Tata Steel at Pathani Samanta Planetarium. The hon'ble CMO, Odisha Shri Naveen Patnaik launched the 13th edition of YATS at Bhubaneswar in December 2019.`,
            link:``,
        },
        {
            id:10,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img5.jpg`,
            date:`22 September 2019`,
            heading:`Our VSLV Team interacted with Dr. K Sivan`,
            content:`Our VSLV Team interacted with Dr. K Sivan (Chairman ISRO) on 21st Sept 2019, at IIT Bhubaneswar.`,
            link:``,
        },
        {
            id:11,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/wuc.jpg`,
            date:`26 July 2018`,
            heading:`Our Team received a grant of 10 Lakhs for further developlment of the product`,
            content:`Idea Club Team of 4 students - Jaswasi Sahoo, Sovan Panda, Sudarshan Samal, Tatwam Siddha are the winners of University Challenge, India Innovation Growth Programme 2.0, by DST, Government of India, Lockheed Martin and Tata Trusts.Remarked by the eminent presence of personalities like Mr. Ramesh Abhishek, secretary DIPP, Mr. Robbie Samanta Roy, VP Lockheed Martin Corporation, Prof. Ashutosh Sharma, Secretary DST. Our Team received a grant of 10 Lakhs for further developlment of the product, on 2nd August 2018 in New Delhi.`,
            link:``,
        },
        {
            id:12,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/sih2.jpg`,
            date:`12 July 2019`,
            heading:`Congratulations to our team Bibhu Panda, Soumyajeet Mahapatra, Prasant Kumar Sahoo, Anshuman Pattanaik for winning the IIGP 2.0`,
            content:`Congratulations to our team Bibhu Panda, Soumyajeet Mahapatra, Prasant Kumar Sahoo, Anshuman Pattanaik for winning the IIGP 2.0 by Department of Science and Technology, Government of India. Felicitated and Received a grant of INR 10 Lakhs by Ashutosh Sharma Iitk, Secretary, DST, Govt. of India`,
            link:``,
        },
        {
            id:13,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/sih.jpg`,
            date:`18 July 2019`,
            heading:`Team Zeus accreditted as the 1st runner up in SMART INDIA HACKATHON 2019`,
            content:`Team Zeus made it to the finals of the SMART INDIA HACKATHON 2019 and came out with flying colours. They bagged the 1st runner's up title at the end of a thrilling finale. Their project: A Thermal fuel battery was highly appreciated by the dignitaries. It is designed to efficiently utilise the waste heat generated from industries. It stores the heat which can be used for various purposes. The battery can hold up the heat of about 300 degree Celcius for 6-7 hours presently.`,
            link:``,
        },
        {
            id:14,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img11.jpg`,
            date:`23 June 2019`,
            heading:`Our team of 10 members (pre-final year undergraduates) underwent a month long training and project work at DRDO Integrated Test Range, Chandipur (June 2019)`,
            content:`Our team of 10 members (pre-final year undergraduates) underwent a month long training and project work at DRDO Integrated Test Range, Chandipur (June 2019)`,
            link:``,
        },
        {
            id:15,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img9.png`,
            date:`13 March 2019`,
            heading:`Our Team VSLV had a meeting with ISRO High Officials`,
            content:`Our Team VSLV had a meeting with ISRO High Officials at Antariksh Bhavan (Dept. of Space) HQ, Bengaluru on 19th Feb 2019, regarding our project presentation and the functioning of ISRO Innovation Center at VSSUT. Our Team interacted with Padma Shri A. S. Kiran Kumar sir (Former Chairman - ISRO). Dr. PV Venkitakirshnan (Director, Capacity Building Programme CBPO), Mr. Raghu R (Deputy Director, CBPO), Mr. N Raghu (Deputy Director, Directorate of Technology Development and Innovation DTDI), Mr. Vivek Singh (Asst Scientific Secretary, DOS &Director Media Public Relations OMPR), Mr. Jiwan kumar Pandit (Associate Director, Outreach &Human Resource Development CBPO) were present during the meeting at Aryabhatta Conference Hall - ISRO HQ.Our efforts and the presentation was well appreciated by them.`,
            link:``,
        },
        {
            id:16,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/imgE10.jpg`,
            date:`19 February 2019`,
            heading:`Our VSLV Team, participated in DRDO International Conference`,
            content:`Our VSLV Team, participated in DRDO International Conference at ITR Chandipur on 15- 17th February 2019.We were felicitated &appreciated by Dr Binaya Ku. Das, Director ITR.`,
            link:``,
        },
        {
            id:17,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img7.png`,
            date:`26 Jnuary 2019`,
            heading:`The contingent of VSLV Team got the opportunity to present the Indigenous Technology on India's 70th Republic Day at the State Parade Bhubaneswar (Odisha).`,
            content:`The contingent of VSLV Team got the opportunity to present the Indigenous Technology on India's 70th Republic Day at the State Parade Bhubaneswar (Odisha). We are the first student body to be presenting Tableau in the occasion. The same has been donated to Pathani Samanta Planetarium BBSR for setting up of permanent exhibit; Courtesy: VSSUT, burla. We are thankful to The Collector SBP, Home Dept, I &PRDept (Govt. of Odisha) and for extending such an opportunity to us.`,
            link:``,
        },
        {
            id:18,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img6.jpg`,
            date:`27 January 2019`,
            heading:`Featured in Mann ki baat – 27 January 2019 Hon'ble Prime Minister of India (PMO) spoke about our Team and Achievements`,
            content:`Featured in Mann ki baat – 27 January 2019 Hon'ble Prime Minister of India (PMO) spoke about our Team and Achievements at Mann ki Baatm, which is an Indian programme hosted by Hon'ble Prime Minister Narendra Modi in which he addresses the people of the nation on All India Radio.`,
            link:``,
        },
        {
            id:19,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/lbr.jpg`,
            date:`25 January 2019`,
            heading:`The VSLV Team, registered Limca Book of Records`,
            content:`The VSLV Team, registered Limca Book of Records for being the first and only student body to have indigenously developed and launched Rockets.`,
            link:``,
        },
        {
            id:20,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img12.jpg`,
            date:`21 December 2018`,
            heading:`Our Team at One day visit at DRDO Integrated Test Range Chandipur`,
            content:`Our Team at One day visit at DRDO Integrated Test Range Chandipur on 19th December 2018. Our Team visited the Optical centre, Radar unit, Mission control centre, Launch complex, bird sanctuary and deer Park, Range HQ.We also witnessed a live launch of small missile of 3km range. Our heartfelt gratitude to Dr. Binaya Kumar Das, Director (Eminent UCE alumnus 1987 batch), and Shri CR Ojha, Group Director HRD for providing this stellar opportunity. DRDO is one of the world’s leading frontrunner in Technology, R&D and this students’ venture has proved to be an immensely motivating experience for our team.`,
            link:``,
        },
        {
            id:21,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img13.jpg`,
            date:`2o December 2018`,
            heading:`VSSUT team interacted with ISRO- Indian Space Research Organisation.`,
            content:`VSSUT team Interaction with ISRO- Indian Space Research Organisation. Our Immense gratitude to Dr. P V Venkitakrishnan (Director, Capacity Building Programme and Former Director, ISRO Propulsion Complex) and Shri Vivek Singh (Asst Scientific Secretary, Department of Space and Director Public Relations ISRO HQ), to visit Burla. Dr. Bijan Das (Ex Deputy Director ISRO) and Er. Bimal Krushna Mishra (President, VSSUT Alumni Association) and also joined the meet. Our utmost thanks to District Collector Samarth Verma, IAS for his stimulating support. Prof. Debadutta Mishra, Head Innovation Centre and Mr. Jaswasi Sahoo, Team Captain delivered the formal presentation.`,
            link:``,
        },
        {
            id:22,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/ns.jpg`,
            date:`25 November 2018`,
            heading:`Idea Club Team was honored by Nuakhai Samman, by Dr. Ashwini Pujari`,
            content:`Idea Club Team was honored by Nuakhai Samman, by Dr. Ashwini Pujari, Director VIMSAR and Shri Durga Padhi on 25 November 2018.`,
            link:``,
        },
        {
            id:23,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/mhrd.jpg`,
            date:`21st November 2018`,
            heading:`Inauguration of MHRD Innovation Cell`,
            content:`Inauguration of MHRD Ministry of Human Resource Development, Government of India Innovation Cell at VSSUT, Burla on 21st November 2018.`,
            link:``,
        },
        {
            id:24,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img16.jpg`,
            date:`3rd November 2018`,
            heading:`Invited at Innovision, NITRourkela - Annual TechFest of National Institute of Technology, Rourkela`,
            content:`Invited at Innovision, NITRourkela - Annual TechFest of National Institute of Technology, Rourkela, where our VSLV team (Anshuman Pattanaik, Bibhu Panda, Sanjeev Dash, Markandeya Mohapatra, Amartya Mohanty, Rohit Tekriwal, Lakshya Agrawal) delivered a Keynote Session and Tech Exhibit. (3rd-4th November 2018)`,
            link:``,
        },
        {
            id:25,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/fnic.jpg`,
            date:`2018`,
            heading:`Idea Club Team Felicitation by North India Chapter`,
            content:`Idea Club Team was feliciated by North India Chapter - VSSUT Alumni Association at IIT Delhi & appreciated by Ex Director Power Grid Mr R P Sasmal (President) 1979 batch,Mr SKdash , 1977 batch and Prof. Sukumar Mishra 1990 batch.`,
            link:``,
        },
        {
            id:26,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/ann.jpg`,
            date:`6 August 2018`,
            heading:`Grand Winner of Anveshan 2018 Make For India Innovation contest`,
            content:`Grand Winner of Anveshan 2018 Make For India Innovation contest Organized by Analog Device Inc . Finals organized at Bangalore on 6 August 2018. Idea Club`,
            link:``,
        },
        {
            id:27,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img4.jpg`,
            date:`2018`,
            heading:`Our VSLVTeam with Dr. PramodMisra (Principal Secretary to Hon’ble Prime Minister) alongwith IAS Samarth Verma (Ex-collector Sambalpur) Our.`,
            content:`Our VSLVTeam with Dr. PramodMisra (Principal Secretary to Hon’ble Prime Minister) alongwith IAS Samarth Verma (Ex-collector Sambalpur) Our.`,
            link:``,
        },
        {
            id:28,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/fslc.jpg`,
            date:`2018`,
            heading:`Foundation stone laying ceremony of Innovation cell`,
            content:`Foundation stone laying ceremony of Innovation cell, Govt. of Odisha organized on the Foundation day of VSSUT (formerly UCE, Burla) on 1st July 2018. Thanks to our Hon'ble Vice Chancellor Prof. Atal Chaudhari, Dean Student's welfare Prof. Debadutta Mishra and mentors VASI (VSSUT Alumni for Skill and Innovation). The Occasion was graced by Mr. Ashesh Padhy, Sr. VP & Director, Reliance Power, Mr. Tarun Ballav Mishra, COO,WESCO&Mr. Siba Prasad Padhi,MD, Udra Constructions.`,
            link:``,
        },
        {
            id:29,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/img21.jpg`,
            date:`15th May 2018`,
            heading:`Our Team at SAC, ISRO, Ahemdabad`,
            content:`A team of 11 members (final year undergraduates) underwent a two-month long research internship and project work at Space Applications Centre, Indian Space Research Organization (SAC, ISRO), Ahmedabad. It commenced on the 15th of May, 2018. They are the first batch from odisha ever to achieve this. They worked on different projects of space technology which include Rover Technology, Advanced observational telescope, GIS Remote Sensing, Radar Technology, Lithography technology, Space-grade Composite materials and others. The team was highly appreciated and recognized by Shri Tapan Misra, Distinguished Scientist and Director of ISRO Ahmedabad.`,
            link:``,
        },
        {
            id:30,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/imgE22.png`,
            date:`13 April 2018`,
            heading:`On 69th Foundation Day of Bhubaneshwar Smart City Hon'ble ChiefMinister felicitated Ms Mamta Gupta with Govt. ofOdisha Youth Innovation Award at Jaydev Bhawan`,
            content:`On 69th Foundation Day of Bhubaneshwar Smart City Hon'ble ChiefMinister felicitated Ms. Mamta Gupta with Govt. of Odisha Youth Innovation Award at Jaydev Bhawan, on 13th April 2018. Chief Minister Naveen Patnaik distributed free incubation offers during the grand finale of Startup India-Odisha Yatra. The Start-up Yatra launched on January 30 impacted nearly 10,000 youth across 50 academic institutions in 16 districts. While around 3,600 ideas were received during the period, 125 ideas were shortlisted for three-day accelerator programme. VSSUT Burla bagged the award for best boot camp. MSME Minister Prafulla Samal, Chief Secretary Mr.A.P. Padhi, Additional Chief Secretary MSME L.N. Gupta, Additional Secretary Department of Industrial Policy and Promotion Atul Chaturvedi were the dignitaries.`,
            link:``,
        },
        {
            id:31,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/soc.jpg`,
            date:`20 April 2018`,
            heading:`Ranjan Panda bags 2nd Runner's Up in Sociovation 3.0`,
            content:`Ranjan Panda bags 2nd Runner's Up in Sociovation 3.0 , for pitching Manual Rice Transplanter Machine. APan India B-Plan competition on social Innovation. Organized by Technology Development Board, DSTwith UKaid, on 20 April 2018.`,
            link:``,
        },
        {
            id:32,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/cm.jpg`,
            date:`20 March 2018`,
            heading:`The Idea Club of VSSUT Burla presented several innovations and StartUp to Hon’ble Chief Minister Odisha Shri Naveen Patnaik`,
            content:`The Idea Club of VSSUT Burla presented several innovations and StartUp to Hon’ble Chief Minister Odisha Shri Naveen Patnaik, at Odisha Secretariat on 20 March 2018.`,
            link:``,
        },
        {
            id:33,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/dst.jpg`,
            date:`20 March 2018`,
            heading:`Bodhisattwa Sanghapriya, won the DSTBIRAC Innovation Challenge Award BIRAC (Department of Biotechnology Govt of India), and has been awarded a grant of 15 Lakhs`,
            content:`Bodhisattwa Sanghapriya, won the DSTBIRAC Innovation Challenge Award BIRAC (Department of Biotechnology Govt of India), and has been awarded a grant of 15 Lakhs, on 20 March 2018.`,
            link:``,
        },
        {
            id:34,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/fce.jpg`,
            date:`21 January 2018`,
            heading:`Interacted with Er.Sudhakar Patri sir, Former Chief Engineer of Hirakud Dam`,
            content:`Interacted with Er.Sudhakar Patri sir, Former Chief Engineer of Hirakud Dam, regarding Application of Space technology for mapping the silt of the reservoir, on 21 January 2018.`,
            link:``,
        },
        {
            id:35,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/jd.jpg`,
            date:`9 December 2017`,
            heading:`Appreciation and Interaction with Mr. Jack D Fischer, NASA Scientist`,
            content:`Appreciation and Interaction with Mr. Jack D Fischer, NASA Scientist and Astronaut at DST Odisha Knowledge hub convention, 9 December 2017.`,
            link:``,
        },
        {
            id:36,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/frd.jpg`,
            date:`26 January 2018`,
            heading:`Felicitation on Republic Day (26th January 2018) by honourable chief guest Dr Raseswari Panigrahi`,
            content:`Felicitation on Republic Day (26th January 2018) by honourable chief guest Dr. Raseswari Panigrahi, MLA, Sambalpur for the success of VSLV 2.0 mission.`,
            link:``,
        },
        {
            id:37,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/ibr1.jpg`,
            date:`December 2017`,
            heading:`The VSLV Rocket and Satellite Team of Idea Club, Individual Rocket Launch registered for V.S.L.V in the Prestigious India Book of Records`,
            content:`The VSLV Rocket and Satellite Team of Idea Club, Individual Rocket Launch registered for V.S.L.V in the Prestigious India Book of Records,December 2017.`,
            link:``,
        },
        {
            id:38,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/fpda.jpg`,
            date:`2017`,
            heading:`VSSUT Student satellite – Hirakud Dam Monitoring Project, won the Create the Future Popular Design Award 2017`,
            content:`VSSUT Student satellite – Hirakud Dam Monitoring Project, won the Create the Future Popular Design Award 2017, by NASA Techbrief. Ms. Anita Mohanty (Batch of ’99) received the Award, at New York City,United States.`,
            link:``,
        },
        {
            id:39,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/abss.jpg`,
            date:`22 October 2017`,
            heading:`The VSLV Team received the Pratishta Samman Scientific Mallick, Award for best Social and innovation`,
            content:`The VSLV Team received the Pratishta Samman Scientific Mallick, Award for best Social innovation, by Sj. Prafulla Hon'ble Minister of Steel Energy and mines and MLA Sambalpur Dr. Raseswari Panigrahi in a felicitation ceremony on 22nd October 2017.`,
            link:``,
        },
        {
            id:40,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/imgE34.jpg`,
            date:`2017`,
            heading:`The VSLV Team of Idea Club interacted with Dr. GSatheesh Reddy, Chairman DRDO Scientific Advisor to Raksha Mantri`,
            content:`The VSLV Team of Idea Club interacted with Dr. GSatheesh Reddy, Chairman DRDO Scientific Advisor to Raksha Mantri (Ministry of Defence, Government of India) and Director General, Missiles and Strategic Systems; Distinguished Scientist & Former Director,Research Centre Imarat (RCI, DRDO).`,
            link:``,
        },
        {
            id:41,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/mz.jpg`,
            date:`22 October 2017`,
            heading:`Indian delegates, Bodhisattwa Sanghapriya and Apurwa masook from Idea Club, Received "molodo zvezda" (Youth star) Award and memento`,
            content:`Indian delegates, Bodhisattwa Sanghapriya and Apurwa Masook from Idea Club, Received "molodo zvezda" (Youth star) Award and memento, Certificate of Appreciation; on 22 October 2017. Another certificate of merit officially from Ministry of Industry and Trade Russia. A total of over 25000 participants from 185 countries had participated in XIXWorld Festival of Youth and Students, Sochi, Russia 2017. VSSUT team was the only team representing India in Science & Technology Section. The Award was given in recognition of the VSLV Rocket and Satellite Project. The Festival was inaugurated and chaired by his Excellency Hon’ble President of Russia Vladimir Putin.`,
            link:``,
        },
        {
            id:42,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/wsw.jpg`,
            date:`10 October 2017`,
            heading:`The VSLVRocket and Satellite Team of Idea Club were awarded the first Prize at Aerospace Expo in World Space Week organized by ISRO`,
            content:`The VSLVRocket and Satellite Team of Idea Club were awarded the first Prize at Aerospace Expo in World Space Week organized by ISRO, Sriharikota, on 10 October 2017.`,
            link:``,
        },
        {
            id:43,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/ap.jpg`,
            date:`2017`,
            heading:`Our Team of 10 pre-final year students at Nagpur, with the Director of Reliance Power`,
            content:`Our Team of 10 pre-final year students at Nagpur, with the Director of Reliance Power – Mr. Ashesh Padhy, and Vice President of Alumni Association`,
            link:``,
        },
        {
            id:44,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/dbd.jpg`,
            date:`11 April 2017`,
            heading:`The VSLV Team formally interacted with Mentor Dr. Bijan Das`,
            content:`The VSLV Team formally interacted with Mentor Dr. Bijan Das, Former Deputy Director, Vikram Sarabhai Space Center, VSSC, ISRO, on April 11 2017.`,
            link:``,
        },
        {
            id:45,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/l4.jpg`,
            date:`27 August 2017`,
            heading:`The VSLV Rocket and Satellite Team of Idea Club won the Champions trophy and the Best Innovation Award of the Asia's 1st Intercollege Rocket Competition, organized by BRICS`,
            content:`The VSLV Rocket and Satellite Team of Idea Club won the Champions trophy and the Best Innovation Award of the Asia's 1st Intercollege Rocket Competition, organized by BRICS (Brazil, Russia, China, India, South Africa) & Space Development Nexus, on 27 August 2017. The team was also appreciated by Hon’ble Chief Minister of Odisha Shri Naveen Patnaik, at Odisha Secretariat on October 7 2017. Snaps.`,
            link:``,
        },
        {
            id:46,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/db.jpg`,
            date:`18 March 2017`,
            heading:`Snaps with Eminent Alumni Members and Faculty during Diamond Jubilee Celebrations of VSSUT Burla and 3rd Global Alumni Meet`,
            content:`Snaps with Eminent Alumni Members and Faculty during Diamond Jubilee Celebrations of VSSUT Burla and 3rd Global Alumni Meet on 18-19th March 2017. Highly appreciated for Exhibition of Ten Innovative projects.`,
            link:``,
        },
        {
            id:47,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/sri.jpg`,
            date:`2017`,
            heading:`SRISTI (Society for Research and Initiatives for Sustainable Technologies and Institutions) with UNICEF and National Innovation Foundation [NIF], organized Summer School of Innovation at the Grambharti campus`,
            content:`SRISTI (Society for Research and Initiatives for Sustainable Technologies and Institutions) with UNICEF and National Innovation Foundation [NIF], organized Summer School of Innovation at the Grambharti campus, Ahmedabad, from 24 May to 12 June 2017.`,
            link:``,
        },
        {
            id:48,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/pag.jpg`,
            date:`2017`,
            heading:`Felicitation and Appreciation from Prof. Anil Gupta`,
            content:`Felicitation and Appreciation from Prof. Anil Gupta, Executive vice Chair – National Innovation Foundation, for organizing 39th SodhYatra in Barpali., May 2017.`,
            link:``,
        },
        {
            id:49,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/vmm.jpg`,
            date:`2017`,
            heading:`The team represented the VSLV at Maker Mela in Mumbai for the year 2017.`,
            content:`The team represented the VSLV at Maker Mela in Mumbai for the year 2017. It brought in the attention of the jury which constituted of Professors from MIT and they applauded the satellite for its innovation and design. The team was awarded with Honorary Jury’s Choice Award at the festival.`,
            link:``,
        },
        {
            id:50,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/vmf.jpg`,
            date:`2017`,
            heading:`The team represented the VSLV at Maker Fest held in Ahmedabad for the year 2017.`,
            content:`The team represented the VSLV at Maker Fest held in Ahmedabad for the year 2017. The top notches of the maker community appreciated it. The Project bagged the Most Promising Social Innovation Award at the festival.`,
            link:``,
        },
        {
            id:51,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/iis.jpg`,
            date:`December 2016`,
            heading:`Our Team won the Best Presenter Award at India International Science Festival`,
            content:`Our Team won the Best Presenter Award at India International Science Festival which was held at CSIR-National Physical Laboratory, New Delhi in December 2016..`,
            link:``,
        },
        {
            id:52,
            image:`https://idea-innovation-cell-vssut.github.io/version_1/IIC-master/img/Achieve/iiif.jpg`,
            date:`2016`,
            heading:`Our Team represented India at India International Innovation Festival 2016 held at Bangalore`,
            content:`Our Team represented India at India International Innovation Festival 2016 held at Bangalore, during October.`,
            link:``,
        },
    ]

    const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // Paginate the data
  const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handling page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#1a1c2c] text-white">
      {/* Render AchievementCard(s) */}
      {currentData.map((content) => (
        <AchievementCard
          key={content.id}
          image={content.image}
          date={content.date}
          heading={content.heading}
          content={content.content}
          link={content.link}
        />
      ))}

      {/* Pagination Controls */}
      <div className="flex space-x-2 mt-5">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-2 py-1 border rounded-full text-black~ bg-gray-300 hover:bg-gray-400 disabled:opacity-50"
        >
          &lt;
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-2 py-1 border rounded-full text-black bg-gray-300 hover:bg-gray-400 disabled:opacity-50 "
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Achievements;