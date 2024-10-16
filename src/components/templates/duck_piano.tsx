"use client";

import { useEffect, useState } from "react";
import PersnalSide from "../organisms/side/persnal_side";
import Macbook from "../organisms/macbook/macbook";
import Tags from "../molecule/tags";

interface PageData {
  title: string;
  description: string;
  stack: {
    frontend: string[];
    backend: string[];
  };
  tags: {
    name: string;
    title: string;
    date: string;
  };
}

const DuckPiano = () => {
  const [duckPiano, setDuckPiano] = useState<PageData | null>(null);

  useEffect(() => {
    fetch("/page.json")
      .then((res) => res.json())
      .then((data) => setDuckPiano(data.duckpiano))
      .catch((err) => console.log(err));
  }, []);

  if (!duckPiano) return <div>Loading...</div>;

  return (
    <div className="w-full h-full relative aspect-[9/16] md:aspect-[16/10]">
      <div className="flex flex-col h-full md:flex-row w-full py-12 px-4 gap-10">
        <div className="w-full h-full md:w-1/3">
          <PersnalSide
            title={duckPiano.title}
            stack={duckPiano.stack}
            caption={duckPiano.description}
          />
        </div>
        <div className="w-full md:w-2/3 flex items-center justify-center">
          <Macbook
            src="/mac/duck_piano.png"
            alt="duck_piano"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full p-4">
        <Tags
          tags={{
            name: duckPiano.tags.name,
            title: duckPiano.tags.title,
            date: duckPiano.tags.date,
          }}
        />
      </div>
    </div>
  );
};

export default DuckPiano;
