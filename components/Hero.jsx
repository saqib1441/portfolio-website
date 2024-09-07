import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, Send } from "lucide-react";
import HeroImg from "@/assets/hero/developer.png";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// Components
import DevImg from "@/components/DevImg";
import Badge from "@/components/Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 lg:h-[100vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex lg:max-w-[50%] flex-col justify-center mx-auto lg:mx-0 text-center lg:text-left">
            <p className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Developer
            </p>
            <h1 className="h1 mb-4 lg:leading-tight">
              Hello, My name is Saqib Ali
            </h1>
            <p className="subtitle mx-auto lg:mx-0">
              I am an experienced software developer specializing in JavaScript,
              with in-depth knowledge of frameworks like React, Node.js,
              Express.js, and MongoDB. I quickly adapt to new technologies and
              work closely with clients to deliver efficient, scalable, and
              user-friendly solutions that tackle real-world problems. Let&#39;s
              team up to make your vision a reality!
            </p>
            {/* Buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto lg:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Hire Me <Send size={18} />
                </Button>
              </Link>
              <Link href="/saqib-ali-cv.pdf" download={true}>
                <Button variant="secondary" className="gap-x-2">
                  Download CV <Download size={18} />
                </Button>
              </Link>
            </div>
          </div>
          {/* Image  */}
          <div className="hidden lg:flex relative w-[50%] justify-end">
            {/* Badge 1 */}
            <Badge
              icon={<RiBriefcase4Fill />}
              endCountNum={2}
              badgeText="Years Of Experience"
              containerStyles="absolute xl:top-[16%] top-[10%] -left-[3rem] xl:left-[1rem]"
            />

            {/* Badge 2 */}
            <Badge
              icon={<RiTodoFill />}
              endCountNum={10}
              endCountText="+"
              badgeText="Finished Projects"
              containerStyles="absolute bottom-[20%] xl:bottom-[10%] left-[1rem] xl:left-10"
            />

            {/* Badge 3 */}
            <Badge
              icon={<RiTeamFill />}
              endCountNum={5}
              endCountText="+"
              badgeText="Happy Clients"
              containerStyles="absolute xl:top-[55%] top-[45%] -right-20"
            />

            <div className="xl:h-[600px] lg:h-[450px] rounded-xl overflow-hidden flex items-center justify-center">
              <DevImg
                containerStyles="h-full w-auto rounded-xl transition-all duration-300 hover:shadow-2xl cursor-pointer"
                imgSrc={HeroImg}
              />
            </div>
          </div>
        </div>
        {/* Icon */}
        <div className="hidden lg:flex absolute left-2/4 bottom-44 xl:bottom-12 lg:bottom-5 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
