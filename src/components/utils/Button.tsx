import { FC } from "react";
import Link from "next/link";
interface ButtonProps {
  className?: string;
  text: string;
  href: string;
}

const Button: FC<ButtonProps> = ({ className, text, href }) => {
  if (!text || text.trim() === "") return null;
  return (
    <Link
      href={href}
      className={`bg-customGreen 
            transition-all 
            duration-500 
            hover:border-customGreen 
            hover:bg-darkCustomGreen 
            text-white 
            text-[20px]
            px-6
            inline-block
            py-2
            rounded-[3px]  
            border 
            border-solid 
            border-customGreen 
            font-medium ${className}`}
    >
      {text}
    </Link>
  );
};

export default Button;
