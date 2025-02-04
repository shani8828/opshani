import React, { useState } from "react";
import brackets from "../assets/svg/Brackets";
import { motion } from "framer-motion";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import Heading from "./Heading";
import Section from "./Section";
import { Gradient } from "./design/Services.jsx";
import Button from "./Button.jsx";
import ComingSoon from "./design/ComingSoon.jsx";
import { Link } from "react-router-dom";

// Separate data into a new file: src/data/sponsorsData.js
const SPONSORS_DATA = {
  2025: {
    title: "Optima 2025 Sponsors",
    categories: {
      // titleSponsor: {
      //   name: "Title Sponsor",
      //   size: "lg",
      //   sponsors: ["spons-25/abc.jpg"],
      // },
      // coTitleSponsor: {
      //   name: "Co-Title Sponsor",
      //   size: "md",
      //   sponsors: ["spons-25/adani.jpg"],
      // },
      strategicPartners: {
        name: "Strategic Sponsors",
        size: "md",
        sponsors: ["spons-25/OPTYM.jpg"],
      },
      majorSponsors: {
        name: "Major Sponsors",
        size: "md",
        sponsors: ["spons-25/blue_yonder.png"],
      },

      mediaPartner: {
        name: "Media Partner",
        size: "sm",
        sponsors: ["spons-25/CampusVarta.png", "spons-25/InsightSuccess.png"],
      
      },
      outreachPartner: {
        name: "Blogger Outreach Partner",
        size: "sm",
        sponsors: ["spons-25/BlogAdda.png"],
      },
      youthMediaPartner: {
        name: "Youth Media Partner",
        size: "sm",
        sponsors: ["spons-25/YouthIncorporated.png"],
      },
      poweredBy: {
        name: "Powered By",
        size: "sm",
        sponsors: ["spons-25/Unstop.png"],
      },
    },
  },
  2023: {
    title: "Optima 2023 Sponsors",
    categories: {
      titleSponsor: {
        name: "Title Sponsor",
        size: "lg",
        sponsors: ["spons-23/OPTYM.jpg"],
      },
      majorSponsors: {
        name: "Major Sponsors",
        size: "md",
        sponsors: ["spons-23/AirIndia.png", "spons-23/FlexSim.jpg"],
      },
      strategicPartners: {
        name: "Strategic Partners",
        size: "sm",
        sponsors: ["spons-23/RahulCommerce.jpg", "spons-23/Vicon.png"],
      },
      eventsPartners: {
        name: "Event Partners",
        size: "sm",
        sponsors: [
          "spons-23/ORMAE.jpeg",
          "spons-23/DCVisionVR.jpg",
          "spons-23/Blue_Yonder.png",
          "spons-23/Delhivery_Logo.png",
          "spons-23/GFG.png",
          "spons-23/Sabre.png",
        ],
      },
      merchandisePartner: {
        name: "Merchandise Partner",
        size: "sm",
        sponsors: ["spons-23/OwlPrints.png"],
      },
      mediaPartners: {
        name: "Media Partners",
        size: "sm",
        sponsors: ["spons-23/CampusVarta.png", "spons-23/WomansEra.png"],
      },
    },
  },
  previous: {
    title: "Previous Sponsors",
    categories: {
      previousSponsors: {
        name: "Previous Sponsors",
        size: "sm",
        sponsors: [
          "spons-prev/ACC.png",
          "spons-prev/AIBH.png",
          "spons-prev/Allied_publishers.png",
          "spons-prev/GE_HealthCare.png",
          "spons-prev/RP_Industrial_Consultant.png",
          "spons-prev/Springer.png",
          "spons-prev/SR_Srinivasan.jpg",
          "spons-prev/TATA.png",
          "spons-prev/Total_Library_Solution.png",
        ],
      },
    },
  },
};

const imgToUrl = {
  "spons-prev/ACC.png": "https://www.acclimited.com/",
  "spons-prev/AIBH.png": "https://www.aibh.in/",
  "spons-prev/Allied_publishers.png": "https://www.alliedpublishers.com/",
  "spons-prev/GE_HealthCare.png": "https://www.gehealthcare.com/",
  "spons-prev/RP_Industrial_Consultant.png": "https://www.rpic.in/",
  "spons-prev/Springer.png": "https://www.springer.com/",
  "spons-prev/SR_Srinivasan.jpg": "https://www.srsrinivasan.com/",
  "spons-prev/TATA.png": "https://www.tata.com/",
  "spons-prev/Total_Library_Solution.png": "https://tlsgroup.co.in/",
  "spons-23/OPTYM.jpg": "https://www.optym.com/",
  "spons-25/OPTYM.jpg": "https://www.optym.com/",
  "spons-25/Unstop.png": "https://unstop.com/",
  "spons-25/InsightSuccess.png": "https://www.insightsuccess.com/",
  "spons-25/CampusVarta.png": "https://www.campusvarta.com/",
  "spons-25/BlogAdda.png": "https://www.blogadda.com/",
  "spons-25/YouthIncorporated.png": "https://youthincmag.com/",
  "spons-23/AirIndia.png": "https://www.airindia.in/",
  "spons-23/FlexSim.jpg": "https://www.flexsim.com/",
  "spons-23/RahulCommerce.jpg": "http://rahulcom.com/",
  "spons-23/Vicon.png": "https://www.vicon.com/",
  "spons-23/ORMAE.jpeg": "https://www.ormae.com/",
  "spons-23/DCVisionVR.jpg": "https://dcvision.in/",
  "spons-25/blue_yonder.png": "https://www.blueyonder.com/",
  "spons-23/Blue_Yonder.png": "https://www.blueyonder.com/",
  "spons-23/Delhivery_Logo.png": "https://www.delhivery.com/",
  "spons-23/GFG.png": "https://www.geeksforgeeks.org/",
  "spons-23/Sabre.png": "https://www.sabre.com/",
  "spons-23/OwlPrints.png": "https://www.owlprints.in/",
  "spons-23/CampusVarta.png": "https://www.campusvarta.com/",
  "spons-23/WomansEra.png": "https://www.womansera.com/",
};

// Component for sponsor category section
const SponsorCategory = ({ name, sponsors, size = "sm" }) => {
  const sizeClasses = {
    sm: "max-w-[18rem] p-1",
    md: "max-w-[32rem] p-2",
    lg: "max-w-[42rem] p-3",
  };

  return (
    <div className="mb-10">
      <h2
        className={`font-bold mb-6 text-center ${
          size === "lg" ? "text-4xl mt-12" : "text-2xl"
        }`}
      >
        {name}
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {sponsors.map((spons) => (
          <a
            key={spons}
            href={imgToUrl[spons]}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={`relative rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300 ${sizeClasses[size]} group`}
            >
              <SponsCard imageUrl={`/assets/spons/${spons}`} size={size} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

// Updated SponsCard component
const SponsCard = ({ imageUrl, size = "sm" }) => {
  const heightClasses = {
    sm: "h-40",
    md: "h-56 md:h-72",
    lg: "h-[250px] md:h-[400px]",
  };

  const widthClasses = {
    sm: "w-40",
    md: "w-56 md:w-72",
    lg: "w-[250px] md:w-[400px]",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`${heightClasses[size]} ${widthClasses[size]} bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden relative z-10`}
    >
      <motion.img
        src={imageUrl}
        alt="Sponsor"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-full w-auto object-contain p-2"
      />
    </motion.div>
  );
};

// Main Spons component
// const Spons = () => {
//   const [activeTab, setActiveTab] = useState("2025");
//   const tabs = [
//     { id: "2025", label: "2024-2025" },
//     { id: "2023", label: "2023-2024" },
//     { id: "previous", label: "Previous" },
//   ];

//   return (
//     <Section
//       id="spons"
//     >
//       <div className="relative z-10">
//         <BackgroundCircles />
//       </div>
//       <div className="container mx-auto relative z-20">
//         <Heading
//           className="md:max-w-md lg:max-w-2xl text-center "
//           title="Our Esteemed Sponsors"
//         />

//         <div className="flex flex-col md:flex-row  w-72 mx-auto md:w-auto md:justify-center gap-4 mb-8">
//           {tabs.map((tab) => (
//             // <TabButton
//             //   key={tab.id}
//             //   active={activeTab === tab.id}
//             //   onClick={() => setActiveTab(tab.id)}
//             //   label={tab.label}
//             // />
//             <Button
//               key={tab.id}
//               active={activeTab === tab.id}
//               onClick={() => setActiveTab(tab.id)}
//             >
//               {tab.label}
//             </Button>
//           ))}
//         </div>

//         {activeTab === "previous" ? (
//           <div className="flex flex-wrap gap-10 mb-10 items-center justify-center">
//             {SPONSORS_DATA.previous.sponsors.map((spons) => (
//               <div
//                 key={spons}
//                 className="relative p-4 rounded-lg shadow-lg bg-white hover:scale-105 transition-transform duration-300 md:max-w-[18rem] group"
//               >
//                 <SponsCard imageUrl={`/assets/spons/spons-prev/${spons}`} />
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="space-y-10">
//             {Object.entries(SPONSORS_DATA[activeTab].categories).map(
//               ([key, category]) => (
//                 <SponsorCategory
//                   key={key}
//                   name={category.name}
//                   sponsors={category.sponsors}
//                   size={category.size}
//                 />
//               )
//             )}
//           </div>
//         )}
//       </div>

//       <Gradient />
//     </Section>
//   );
// };

const Spons = () => {
  document.title = "Sponsors | Optima 2025";
  const [activeTab, setActiveTab] = useState("2025");

  return (
    <Section id="spons">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl text-center"
          title="Our Esteemed Sponsors"
        />
        <BackgroundCircles />
        <div className="flex flex-col md:flex-row w-36 md:w-72 mx-auto md:w-auto md:justify-center gap-4 mb-8">
          <SelectButton
            active={activeTab === "2025"}
            onClick={() => setActiveTab("2025")}
          >
            2024-2025
          </SelectButton>
          <SelectButton
            active={activeTab === "2023"}
            onClick={() => setActiveTab("2023")}
          >
            2023-2024
          </SelectButton>
          <SelectButton
            active={activeTab === "previous"}
            onClick={() => setActiveTab("previous")}
          >
            Previous
          </SelectButton>
        </div>
        {/* Hardcoded Content Based on Selection */}
        {activeTab === "2025" && (
          // <div className="flex justify-center z-0">
          // 	<ComingSoon /> {/* dummy */}
          // </div>
          <div className="space-y-10">
            {Object.entries(SPONSORS_DATA["2025"].categories).map(
              ([key, category]) => (
                <SponsorCategory
                  key={key}
                  name={category.name}
                  sponsors={category.sponsors}
                  size={category.size}
                />
              )
            )}
          </div>
        )}

        {activeTab === "2023" && (
          <div className="space-y-10">
            {Object.entries(SPONSORS_DATA["2023"].categories).map(
              ([key, category]) => (
                <SponsorCategory
                  key={key}
                  name={category.name}
                  sponsors={category.sponsors}
                  size={category.size}
                />
              )
            )}
          </div>
        )}
        {activeTab === "previous" && (
          <div className="space-y-10">
            {Object.entries(SPONSORS_DATA["previous"].categories).map(
              ([key, category]) => (
                <SponsorCategory
                  key={key}
                  name={category.name}
                  sponsors={category.sponsors}
                  size={category.size}
                />
              )
            )}
          </div>
        )}
      </div>

      <Gradient />
    </Section>
  );
};


const SelectButton = ({ active, href, onClick, children }) => {
	const classes = `
    px-3 md:px-6 py-3 rounded-full transition-all duration-300
    ${
      active
        ? "bg-white text-primary-1 text-black shadow-lg transform scale-105"
        : "bg-n-8/80 text-n-3 hover:bg-n-6 hover:text-white"
    }
    font-medium border border-n-6 justify-center
    flex items-center gap-2
    text-center
  `
	const spanClasses = "relative z-10";

	const renderButton = () => (
		<button className={classes} onClick={onClick}>
			<span className={spanClasses}>{children}</span>
		</button>
	);

	const renderLink = () =>
		href.startsWith("/") ? (
			<Link to={href} className={classes}>
				<span className={spanClasses}>{children}</span>
			</Link>
		) : (
			<a href={href} className={classes} target="_blank">
				<span className={spanClasses}>{children}</span>
			</a>
		);

	return href ? renderLink() : renderButton();
};

export default Spons;
