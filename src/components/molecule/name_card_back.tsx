import Image from "next/image";

const NameCardBack = () => {
  return (
    <div className="w-full h-full flex justify-center items-center p-3">
      <Image
        src="/moonhyerim.png"
        alt="profile"
        width={600}
        height={100}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

export default NameCardBack;
