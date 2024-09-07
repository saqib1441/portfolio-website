"use client";

import Image from "next/image";
import ReviewAvatar1 from "@/assets/reviews/avatar-1.png";
import ReviewAvatar2 from "@/assets/reviews/avatar-2.png";
import ReviewAvatar3 from "@/assets/reviews/avatar-3.png";
import ReviewAvatar4 from "@/assets/reviews/avatar-4.png";
import ReviewAvatar5 from "@/assets/reviews/avatar-5.png";
import ReviewAvatar6 from "@/assets/reviews/avatar-6.png";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Swipper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swipper Styles
import "swiper/css";
import "swiper/css/pagination";

// import Required modules
import { Pagination } from "swiper/modules";

const reviewsData = [
  {
    avatar: ReviewAvatar1,
    name: "Sheryl May",
    job: "Designer",
    review:
      "The attention to detail and the quality of the development exceeded my expectations. Highly recommended!",
  },
  {
    avatar: ReviewAvatar2,
    name: "Jane Cooper",
    job: "Teacher",
    review:
      "I had an amazing experience here. The customer service was top-notch, and I found exactly what I was looking for. I&#39;ll definitely be a returning customer!",
  },
  {
    avatar: ReviewAvatar3,
    name: "Darrell Steward",
    job: "Banker",
    review:
      "I was pleasantly surprised by the affordability and the excellent customer service. I&#39;ll definitely be recommending this to my friends and family.",
  },
  {
    avatar: ReviewAvatar4,
    name: "Leslie Alexander",
    job: "Engineer",
    review:
      "I&#39;ve been a loyal customer for years, and I&#39;ve never been disappointed. The quality is consistently high, and the customer service is always friendly and helpful.",
  },
  {
    avatar: ReviewAvatar5,
    name: "Courtney Henry",
    job: "Developer",
    review:
      "I recently order for a website, and I&#39;m extremely satisfied with my experience. The website is exactly what I needed.",
  },
  {
    avatar: ReviewAvatar6,
    name: "Albert Flores",
    job: "Barista",
    review:
      "I&#39;ve been searching for a reliable online freelancer for a while, and I&#39;m thrilled to have found this one. The design selection is also impressive.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        {/* Slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((person, key) => (
            <SwiperSlide key={key}>
              <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                <CardHeader className="p-0 mb-10">
                  <div className="flex items-center gap-x-4">
                    {/* Image */}
                    <Image
                      src={person.avatar}
                      alt={person.avatar}
                      width={70}
                      height={70}
                      priority
                    />

                    {/* Name */}
                    <div className="flex flex-col">
                      <CardTitle>{person.name}</CardTitle>
                      <p>{person.job}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardDescription className="text-lg text-muted-foreground">
                  {person.review}
                </CardDescription>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
