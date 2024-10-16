import Title from "../../atom/title";
import Stack from "../../molecule/stack";
import Caption from "../../atom/caption";
import QrImg from "../../molecule/qr_img";
interface PersnalSideProps {
  title: string;
  stack: {
    [key: string]: string[];
  };
  caption: string;
  qr?: {
    src?: string;
    alt?: string;
    link?: string;
  };
}

const PersnalSide = ({ title, stack, caption, qr }: PersnalSideProps) => {
  return (
    <div className="flex flex-col justify-between h-full gap-4">
      <Title text={title} />
      {qr && qr.src && (
        <div className="relative group">
          <QrImg
            src={qr.src}
            alt={qr.alt || "QR 코드"}
            width={100}
            height={100}
            link={qr.link}
          />
        </div>
      )}
      <Stack stack={stack} />
      <Caption text={caption} />
    </div>
  );
};

export default PersnalSide;
