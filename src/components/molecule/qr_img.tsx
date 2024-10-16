import Img from "../atom/img";

const QrImg = ({
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
  return <Img src={src} alt={alt} width={width} height={height} />;
};

export default QrImg;
