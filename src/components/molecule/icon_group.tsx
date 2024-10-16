import React from "react";
import Image from "next/image";
import "../../style/IconGroup.css";

interface IconData {
  src: string;
  alt: string;
  width: number;
  height: number;
  name: string;
}

interface IconGroupProps {
  icons: IconData[];
  className?: string;
}

const IconGroup: React.FC<IconGroupProps> = ({ icons, className }) => {
  return (
    <div className={className}>
      {icons.map((icon, index) => (
        <div key={index} className="iconContainer justify-center items-center">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.height}
            className="iconImage"
            style={{ width: "auto", height: "auto" }}
          />
          <span className="iconName">{icon.name}</span>
        </div>
      ))}
    </div>
  );
};

export default IconGroup;
