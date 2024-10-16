import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  date?: string;
}

const Card: React.FC<CardProps> = ({ children, date }) => {
  return (
    <div className="border border-black bg-slate-50 text-zinc-900 flex flex-col justify-between items-center w-full aspect-[9/16] md:aspect-[16/10]">
      <div className="flex-grow flex items-center justify-center text-4xl font-bold">
        {children}
      </div>
      {date && <p className="text-zinc-500">{date}</p>}
    </div>
  );
};

export default Card;
