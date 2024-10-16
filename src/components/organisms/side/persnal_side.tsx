import Title from "../../atom/title";
import Stack from "../../molecule/stack";
import Caption from "../../atom/caption";

interface PersnalSideProps {
  title: string;
  stack: {
    [key: string]: string[];
  };
  caption: string;
}

const PersnalSide = ({ title, stack, caption }: PersnalSideProps) => {
  return (
    <div className="flex flex-col justify-between h-full gap-4">
      <Title text={title} />
      <Stack stack={stack} />
      <Caption text={caption} />
    </div>
  );
};

export default PersnalSide;
