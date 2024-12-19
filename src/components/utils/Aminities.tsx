import { FC } from "react";
import Image from "next/image";
interface AminitiesProps {
  className?: string;
  title: string; 
  src: string; 
}

const Aminities: FC<AminitiesProps> = ({ className, title, src }) => {
  if (!title || title.trim() === "") return null;
  return (
   <div className="flex gap-4 items-center">
    <Image
            src={src}
            alt={title}
            width={50}
            height={50}
            priority
           className="h-[50px] w-[50px]"/> <p className="font-playfair text-[18px] font-normal leading-[140%] text-themeTextBlack">{title}</p>
   </div>
    
  );
};



export default Aminities