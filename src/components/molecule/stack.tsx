"use client";

import React, { useState, useEffect } from "react";
import IconGroup from "./icon_group";

interface IconData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface IconsData {
  icon: {
    [key: string]: IconData;
  };
}

interface StackProps {
  stack: {
    [key: string]: string[];
  };
}

const Stack: React.FC<StackProps> = ({ stack }) => {
  const [icons, setIcons] = useState<IconsData["icon"] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchIcons = async () => {
      // 로컬 스토리지에서 캐시된 아이콘 데이터 확인
      const cachedIconsJSON = localStorage.getItem("cachedIcons");
      const cachedIcons = cachedIconsJSON ? JSON.parse(cachedIconsJSON) : null;

      if (cachedIcons) {
        setIcons(cachedIcons);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch("/icon/icon.json");
        const data: IconsData = await response.json();
        setIcons(data.icon);
        console.log("아이콘 데이터 로드됨:", data);

        // 아이콘 데이터를 로컬 스토리지에 캐시
        localStorage.setItem("cachedIcons", JSON.stringify(data.icon));

        setIsLoading(false);
      } catch (error) {
        console.error("아이콘 데이터를 불러오는 데 실패했습니다:", error);
        setIsLoading(false);
      }
    };

    fetchIcons();
  }, []);

  if (isLoading) {
    return <div>아이콘을 불러오는 중...</div>;
  }

  if (!icons) {
    return <div>아이콘을 불러올 수 없습니다.</div>;
  }

  const renderStackItems = (items: string[]) => {
    const iconData = items
      .map((item) => {
        const iconKey = item.toLowerCase();
        return icons[iconKey] ? { ...icons[iconKey], name: item } : null;
      })
      .filter((icon): icon is IconData & { name: string } => icon !== null);

    return (
      <div className="flex flex-col gap-2 w-full h-full justify-center items-start">
        <IconGroup
          icons={iconData}
          className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(40px,1fr))] w-full"
        />
      </div>
    );
  };

  return (
    <div className="mt-4 h-full">
      {Object.entries(stack).map(([category, items]) => (
        <div
          key={category}
          className="flex flex-row items-start gap-2 justify-center my-2"
        >
          <h4 className="text-lg font-semibold mb-2 capitalize">{category}</h4>
          {renderStackItems(items)}
        </div>
      ))}
    </div>
  );
};

export default Stack;
