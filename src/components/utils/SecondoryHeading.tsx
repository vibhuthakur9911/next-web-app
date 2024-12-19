import { FC } from "react";

interface SubHeadingProps {
  className?: string; // Optional class for styling
  text: string; // Text content for the heading
}

const SubHeading: FC<SubHeadingProps> = ({ className, text }) => {
  if (!text || text.trim() === "") return null;
  return (
    <h5 className={`text-[22px] leading-normal font-semibold text-darkCustomGreen ${className}`}>
      {text}
    </h5>
    
  );
};



export default SubHeading