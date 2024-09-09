"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import WorkImg1 from "@/assets/work/1.png";
import WorkImg2 from "@/assets/work/2.png";
import WorkImg3 from "@/assets/work/3.png";
import WorkImg4 from "@/assets/work/4.png";

// Swipper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swipper Styles
import "swiper/css";
import "swiper/css/pagination";

// import Required modules
import { Pagination } from "swiper/modules";

// import Componenets
import ProjectCard from "@/components/ProjectCard";

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
    category: "Next JS",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sed nostrum eius a repellat iure, voluptatum totam. Deleniti, magnam corrupti",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section className="relative mb-28 lg:mb-36">
      <div className="container mx-auto">
        {/* Text */}
        <div className="xl:max-w-[550px] max-w-[700px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Project</h2>
          <p className="subtitle mb-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt quos
            excepturi vitae ratione eaque aut, expedita officia? Vel, quod sunt!
          </p>
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>
        {/* Slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* Show only first 4 projects */}
            {projectData.slice(0, 4).map((project, key) => (
              <SwiperSlide key={key}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
