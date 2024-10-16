"use client";

import React, { useState, useEffect } from "react";
import PersnalSide from "../organisms/side/persnal_side";
import Macbook from "../organisms/macbook/macbook";
import Tags from "../molecule/tags";

interface PageData {
  title: string;
  description: string;
  stack: {
    [key: string]: string[];
  };
  tags?: {
    name?: string;
    title?: string;
    date?: string;
  };
  image?: {
    src?: string;
    alt?: string;
  };
}

interface ProjectTemplateProps {
  projectKey: string;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ projectKey }) => {
  const [projectData, setProjectData] = useState<PageData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // 로컬 스토리지에서 캐시된 데이터 확인
      const cachedJSON =
        typeof window !== "undefined"
          ? localStorage.getItem("projectData")
          : null;
      const cachedData = cachedJSON ? JSON.parse(cachedJSON) : null;

      if (cachedData && cachedData[projectKey]) {
        setProjectData(cachedData[projectKey]);
        return;
      }

      try {
        const response = await fetch("/page.json");
        const data = await response.json();

        if (data[projectKey]) {
          setProjectData(data[projectKey]);
          if (typeof window !== "undefined") {
            const cachedData = JSON.parse(
              localStorage.getItem("projectData") || "{}"
            );
            cachedData[projectKey] = data[projectKey];
            localStorage.setItem("projectData", JSON.stringify(cachedData));
          }
        } else {
          setError(
            `프로젝트 키 "${projectKey}"에 해당하는 데이터를 찾을 수 없습니다.`
          );
        }
      } catch (err) {
        console.error(err);
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      }
    };

    fetchData();
  }, [projectKey]);

  if (error) return <div>오류: {error}</div>;
  if (!projectData) return <div>로딩 중...</div>;

  const tags = projectData.tags || { name: "", title: "", date: "" };

  return (
    <div className="w-full h-full relative aspect-[9/16] md:aspect-[16/10]">
      <div className="flex flex-col h-full md:flex-row w-full py-12 px-4 gap-10 absolute top-0 left-0 z-10">
        <div className="w-full h-full md:w-1/3 overflow-y-auto scrollbar-hide">
          <PersnalSide
            title={projectData.title}
            stack={projectData.stack}
            caption={projectData.description}
          />
        </div>
        <div className="w-full md:w-2/3 flex items-center justify-center">
          <Macbook
            src={`/mac/${projectKey}.png`}
            alt={projectData.title}
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full p-4">
        <Tags
          tags={{
            name: tags.name || "",
            title: tags.title || "",
            date: tags.date || "",
          }}
        />
      </div>
    </div>
  );
};

export default ProjectTemplate;
