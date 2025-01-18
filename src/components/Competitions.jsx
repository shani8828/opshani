// import { competitions } from "../constants";
// import Heading from "./Heading";
// import Section from "./Section";
// import Arrow from "../assets/svg/Arrow";
// import { GradientLight } from "./design/Benefits";
// import ClipPath from "../assets/svg/ClipPath";

// const Competitions = () => {
//   return (
//     <Section id="competitions">
//       <div className="container relative z-2">
//         <Heading
//           className="md:max-w-md lg:max-w-2xl font-bold"
//           title="Competitions"
//         />

//         <div className="flex flex-wrap gap-10 mb-10">
//           {competitions.map((item) => (
//             <div
//               className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
//               style={{
//                 backgroundImage: `url(${item.backgroundUrl})`,
//               }}
//               key={item.id}
//             >
//               <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
//                 <h5 className="h5 mb-5">{item.title}</h5>
//                 <p className="body-2 mb-6 text-n-3">{item.text}</p>
//                 <div className="flex items-center mt-auto gap-3">
//                   {/* WhatsApp Icon */}
//                   <img
//                     src={item.whatsppicon}
//                     width={48}
//                     height={48}
//                     alt="WhatsApp Icon"
//                     className="cursor-pointer"
//                   />
//                   {/* Unstop Icon */}
//                   <img
//                     src={item.Unstopicon}
//                     width={48}
//                     height={48}
//                     alt="Unstop Icon"
//                     className="cursor-pointer"
//                   />
//                   <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
//                     Explore more
//                   </p>
//                   <Arrow />
//                 </div>
//               </div>

//               {item.light && <GradientLight />}

//               <div
//                 className="absolute inset-0.5 bg-n-8"
//                 style={{ clipPath: "url(#benefits)" }}
//               >
//                 <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
//                   {item.imageUrl && (
//                     <img
//                       src={item.imageUrl}
//                       width={380}
//                       height={362}
//                       alt={item.title}
//                       className="w-full h-full object-cover"
//                     />
//                   )}
//                 </div>
//               </div>

//               <ClipPath />
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Competitions;


import { competitions } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";

const Competitions = () => {
  return (
    <Section id="competitions">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl font-bold"
          title="Competitions"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {competitions.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                <div className="flex items-center mt-auto gap-3">
                  {/* WhatsApp Icon */}
                  <a href={item.whatsAppLink} target="_blank" rel="noopener noreferrer" className="p-2">
                    <img
                      src={item.whatsppicon}
                      width={48}
                      height={48}
                      alt="WhatsApp Icon"
                      className="cursor-pointer"
                    />
                  </a>
                  {/* Unstop Icon */}
                  <a href={item.unstopLink} target="_blank" rel="noopener noreferrer"  className="p-2 pr-4">
                    <img
                      src={item.Unstopicon}
                      width={48}
                      height={48}
                      alt="Unstop Icon"
                      className="cursor-pointer"
                    />
                  </a>
                  <Button><p className="ml-auto font-code text-xs font-bold text-n-2 uppercase ">
                    Problem Statement
                  </p>
                  </Button>
                  
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Competitions;





