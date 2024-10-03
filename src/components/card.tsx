import React, { ReactNode } from "react";

interface cardPorps {
  children: ReactNode;
}

const Card: React.FC<cardPorps> = ({ children }) => {
  return <div className="border border-black aspect-square">{children}</div>;
};

export default Card;
