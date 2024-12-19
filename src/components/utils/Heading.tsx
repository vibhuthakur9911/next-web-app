// import React from "react";

// export default function Heading() {
//   return (
//     <div>
//       <h3 className="text-[40px] leading-normal pb-8 font-normal text-center">
//         Hawley Farm
//       </h3>
//     </div>
//   );
// }


import { FC } from "react";

interface HeadingProps {
  className?: string; // Optional class for styling
  text: string; // Text content for the heading
}

const Heading: FC<HeadingProps> = ({ className, text }) => {
  if (!text || text.trim() === "") return null;
  return (
    <h3 className={`text-[40px] leading-normal  font-normal text-center text-darkCustomGreen ${className}`}>
    {/* <h3
      className={`text-[40px] leading-normal pb-8 font-normal text-center ${
        text ? "" : "hidden"
      } ${className}`}
    > */}
      {text}
    </h3>
  );
};

export default Heading