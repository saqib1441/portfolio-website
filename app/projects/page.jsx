"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import WorkImg1 from "@/assets/work/1.png";
import WorkImg2 from "@/assets/work/2.png";
import WorkImg3 from "@/assets/work/3.png";
import WorkImg4 from "@/assets/work/4.png";

const projectData = [
  {
    image: WorkImg3,
    category: "React JS",
    name: "Evolve Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed nostrum eius a repellat iure, voluptatum totam. Deleniti, magnam corrupti",
    link: "/",
    github: "/",
  },
  {
    image: WorkImg4,
    category: "React JS",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed nostrum eius a repellat iure, voluptatum totam. Deleniti, magnam corrupti",
    link: "/",
    github: "/",
  },
  {
    image: WorkImg2,
    category: "Next JS",
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed nostrum eius a repellat iure, voluptatum totam. Deleniti, magnam corrupti",
    link: "/",
    github: "/",
  },
  {
    image: WorkImg1,
    category: "Full Stack",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed nostrum eius a repellat iure, voluptatum totam. Deleniti, magnam corrupti",
    link: "/",
    github: "/",
  },
];

// remove category duplicate
const uniqueCategories = [
  "All Projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("All Projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "All Projects" || project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>

        {/* Tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:w-fit mb-12 mx-auto md:border dark:border-none lg:max-w-[640px] p-1">
            {categories.map((category, key) => (
              <TabsTrigger
                key={key}
                value={category}
                onClick={() => setCategory(category)}
                className="capitalize w-[162px] mx-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Tab Content */}
          <div className="text-lg xl:mt-8 grid xl:grid-cols-3 lg:grid-cols-2 xl:gap-5 gap-5 lg:gap-10">
            {filteredProjects.map((project, key) => (
              <TabsContent key={key} value={category}>
                <ProjectCard project={project} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
