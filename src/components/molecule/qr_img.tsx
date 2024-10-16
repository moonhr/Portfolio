import Image from "next/image";

interface QrImgProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  link?: string;
}

const QrImg: React.FC<QrImgProps> = ({ src, alt, width, height, link }) => {
  return (
    <div className="relative group hover:cursor-pointer hover:opacity-80">
      <a href={link || "#"} target="_blank" rel="noopener noreferrer">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-sm font-bold">사이트로 이동</span>
        </div>
      </a>
    </div>
  );
};

export default QrImg;
