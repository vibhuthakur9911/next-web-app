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

interface FaqQuestionsProps {
  className?: string; // Optional class for styling
  questions: string; 
  answer: string; 
}

const FaqQuestions: FC<FaqQuestionsProps> = ({ className, answer, questions }) => {
  if (!questions || questions.trim() === "") return null;
  return (
    <>
      <div>
        <p className="question text-sm font-workSans text-themeTextBlack font-normal leading-[140%] uppercase mb-2">{questions}</p>
        <p className="font-ubanTu text-themeTextBlack font-light leading-[140%] text-base whitespace-break-spaces"> {answer} </p>
      </div>
    </>
  );
};

export default FaqQuestions;
