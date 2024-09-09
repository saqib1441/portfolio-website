import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Crafting seamless digital experiences with modern web technologies.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description: "Designing visually appealing and user-friendly interfaces.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description: "Building high-quality applications for various platforms.",
  },
];

const Services = () => {
  return (
    <section className="mb-28 lg:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 lg:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* Grid Items */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-y-20 lg:gap-x-8">
          {servicesData &&
            servicesData.map((item, key) => (
              <Card
                key={key}
                className="w-full max-x-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative dark:border-2"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[120px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center rounded">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
