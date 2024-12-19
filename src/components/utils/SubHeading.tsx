import { FC } from "react";

interface SubHeadingProps {
  className?: string; // Optional class for styling
  text: string; // Text content for the heading
}

const SubHeading: FC<SubHeadingProps> = ({ className, text }) => {
  if (!text || text.trim() === "") return null;
  return (
    <h6 className={`text-lg leading-normal font-normal ${className}`}>
      {text}
    </h6>
    
  );
};



export default SubHeading