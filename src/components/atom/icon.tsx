import Image from "next/image";

const Icon = ({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={{ width: "auto", height: "auto" }}
    />
  );
};

export default Icon;


