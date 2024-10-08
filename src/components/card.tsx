import React, { ReactNode } from "react";

interface cardPorps {
  children: ReactNode;
}

const Card: React.FC<cardPorps> = ({ children }) => {
  return (
    <div className="border border-black aspect-square bg-slate-50 text-zinc-900">
      {children}
    </div>
  );
};

export default Card;
