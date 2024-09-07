import DevImg from "@/components/DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroImg from "@/assets/hero/developer.png";
import vscode from "@/assets/about/vscode.svg";
import figma from "@/assets/about/figma.svg";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Saqib Ali",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+92 3032988741",
  },
  {
    icon: <MailIcon size={20} />,
    text: "msaqibalilolai@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 15 December, 2004",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Bs. Data Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Zahir Pir, Punjab, Pakistan",
  },
];

const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "Al Bilal High School Zahir Pir",
        qualification: "Matric",
        year: "2017 - 2019",
      },
      {
        university: "Al Hayyan School Zahir Pir",
        qualification: "FSC Pre Engineering",
        year: "2019 - 2021",
      },
      {
        university: "Concordia College Zahir Pir",
        qualification: "Bs Data Science",
        year: "2021 - 2024",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "THE ACE ACADEMY ZAHIR PIR",
        qualification: "Software Engineer",
        year: "2022 - Present",
      },
      {
        company: "THE ACE ACADEMY ZAHIR PIR",
        qualification: "Manager",
        year: "2023 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "tools",
    data: [
      {
        imgPath: vscode,
      },
      {
        imgPath: figma,
      },
    ],
  },
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, JavaScript",
      },
      {
        name: "React JS, Tailwind CSS, Next JS",
      },
      {
        name: "Node JS, Express, MongoDB, Mongoose",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] py-12 lg:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 lg:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col lg:flex-row items-center xl:gap-20 gap-5">
          {/* Image */}
          <div className="xl:h-[600px] h-[500px] lg:w-[50%] xl:w-[40%] rounded-xl overflow-hidden lg:flex items-center justify-center hidden">
            <DevImg
              containerStyles="h-[450px] xl:h-[500px] w-auto rounded-xl transition-all duration-300 hover:shadow-2xl cursor-pointer"
              imgSrc={HeroImg}
            />
          </div>

          {/* Tabs */}
          <div className="lg:w-[60%] w-full">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid lg:grid-cols-3 lg:max-w-[520px] lg:border dark:border-none lg:p-1 pt-3">
                <TabsTrigger className="w-[162px] lg:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] lg:w-auto"
                  value="qualifications"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] lg:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* Tab Content */}
              <div className="text-lg mt-12 lg:mt-8">
                {/* Personal */}
                <TabsContent value="personal">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched service quality for Over 2 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto lg:mx-0">
                      I specialize in crafting intuitive websites with cutting
                      edge technology, delivering dynamic and engaging user
                      experience.
                    </p>

                    {/* Icons */}
                    <div className="grid lg:grid-cols-2 gap-4 mb-12">
                      {infoData &&
                        infoData.map((info, key) => {
                          return (
                            <div
                              key={key}
                              className="flex items-center gap-x-4 mx-auto lg:mx-0"
                            >
                              <div className="text-primary">{info.icon}</div>
                              <div>{info.text}</div>
                            </div>
                          );
                        })}
                    </div>

                    {/* Languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language</div>
                      <div className="border-b border-border"></div>
                      <div>Urdu, English</div>
                    </div>
                  </div>
                </TabsContent>
                {/* Qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center lg:text-left">
                      My Awesome Journey
                    </h3>
                    {/* Experience & Education */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-primary text-[22px]">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Experience").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Experience").data.map(
                            (item, key) => {
                              const { company, qualification, year } = item;
                              return (
                                <div key={key} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-primary text-[22px]">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "Education").title}
                          </h4>
                        </div>
                        {/* List */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "Education").data.map(
                            (item, key) => {
                              const { university, qualification, year } = item;
                              return (
                                <div key={key} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {year}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills */}
                <TabsContent value="skills">
                  <div className="text-center lg:text-left">
                    <h3 className="h3 mb-8"> What I use everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skill</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skills list */}
                      <div>
                        {getData(skillData, "skills").data.map((skill, key) => {
                          const { name } = skill;
                          return (
                            <div
                              key={key}
                              className="w-2/4 text-center lg:text-left mx-auto lg:mx-0"
                            >
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* Tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 lg:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Tool List */}
                      <div className="flex gap-x-8 justify-center lg:justify-start">
                        {getData(skillData, "tools").data.map((tool, key) => {
                          const { imgPath } = tool;
                          return (
                            <div key={key}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt="saqib-ali-tools"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
