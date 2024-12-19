import { FC } from "react";

interface OnTheFarmProps {
  className?: string; // Optional class for styling
  text?: string; // Text content for the heading
  month?: string; // Text content for the heading
}

const OnTheFarm: FC<OnTheFarmProps> = ({ className, text, month }) => {
    // if (!month || month.trim() === "") return null;
  if (!text || text.trim() === "") return null;
  return (
    <div className={`a-year-farm-content ${className}`}>
      <h6 className={`${className}`}>{month}</h6>
      <p>
       {text}
      </p>
    </div>
  );
};

export default OnTheFarm;
