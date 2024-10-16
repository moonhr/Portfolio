import Mac from "../../molecule/mac";

interface MacbookProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const Macbook = ({ src, alt, width, height }: MacbookProps) => {
  return (
    <div className={`bg-[#DCDBCE] z-0 relative p-7 rounded-lg w-full`}>
      <Mac src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Macbook;
