import React from "react";

const Title = ({ text }: { text: string }) => {
  return <h1 className="text-4xl font-semibold uppercase">{text}</h1>;
};

export default Title;
