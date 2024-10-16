"use client";
import React from "react";
import Card from "../utils/Card";
import NameCard from "../molecule/NameCard";
import FlipCard from "../utils/flip_card";
import ProjectTemplate from "../templates/project_template";
import NameCardBack from "../molecule/name_card_back";
const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-2 w-[98vw] h-full gap-4 overflow-x-hidden overflow-y-auto">
      <FlipCard frontContent={<NameCard />} backContent={<NameCardBack />} />
      <FlipCard
        frontContent={<Card>Duck Piano</Card>}
        backContent={<ProjectTemplate projectKey="duckpiano" />}
      />
      <FlipCard
        frontContent={<Card>KDT Class LOL Data</Card>}
        backContent={<ProjectTemplate projectKey="kdt-class-lol-data" />}
      />
      <FlipCard
        frontContent={<Card>Starting Pokemon</Card>}
        backContent={<ProjectTemplate projectKey="starting-pokemon" />}
      />
      <FlipCard
        frontContent={<Card>Popcat Piano</Card>}
        backContent={<ProjectTemplate projectKey="popcat-piano" />}
      />
      <FlipCard
        frontContent={<Card>Vending Machine</Card>}
        backContent={<ProjectTemplate projectKey="vending-machine" />}
      />
      <FlipCard
        frontContent={<Card>ERP</Card>}
        backContent={<ProjectTemplate projectKey="erp" />}
      />
      <FlipCard
        frontContent={<Card>Whisper In A Bottle</Card>}
        backContent={<ProjectTemplate projectKey="whisper-in-a-bottle" />}
      />
      <FlipCard
        frontContent={<Card>Machine Learning</Card>}
        backContent={<ProjectTemplate projectKey="machine-learning" />}
      />
    </div>
  );
};

export default DashboardLayout;
