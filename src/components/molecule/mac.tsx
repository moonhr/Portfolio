import Image from "next/image";

interface MacProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Mac = ({ src, alt, width, height }: MacProps) => {
  return (
    <div className="relative z-10 w-full">
      <Image
        src="/mac.png"
        alt="mac"
        width={200}
        height={200}
        className="z-10 relative w-full"
      />
      <div className="absolute top-0 w-full flex justify-center items-center">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="z-0 absolute top-0 w-5/6 m-auto rounded-lg mt-1"
        />
      </div>
    </div>
  );
};

export default Mac;
