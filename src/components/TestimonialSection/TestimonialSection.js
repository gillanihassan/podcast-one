"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "The splendors of the PodcastOne Network continue to amaze and expand.",
    author: "Adweek",
  },
  {
    text: "PodcastOne delivers premium podcast content across multiple categories.",
    author: "Forbes",
  },
  {
    text: "A leading platform bringing the best voices in podcasting together.",
    author: "TechCrunch",
  },
];

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const changeSlide = (newIndex) => {
    if (fade) return; // Prevent spamming
    setFade(true);
    setTimeout(() => {
      setIndex(newIndex);
      setFade(false);
    }, 500); // 300ms fade out before changing text
  };

  const prevSlide = () => {
    changeSlide(index === 0 ? testimonials.length - 1 : index - 1);
  };

  const nextSlide = () => {
    changeSlide(index === testimonials.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="bg-[#350A32] text-white py-24 sm:py-32 px-4 md:px-20 relative flex flex-col items-center justify-center w-full min-h-[600px]">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 text-[#F2B2EC] transition-colors cursor-pointer"
      >
        <ChevronLeft size={48} strokeWidth={1.5} />
      </button>

      {/* Content Container */}
      <div className="flex flex-col items-center gap-12 md:gap-16 max-w-[800px] xl:max-w-[1000px] w-full text-center px-10 md:px-0">

        {/* Small Heading */}
        <p className="font-aeonik text-[13px] md:text-[20px] font-medium uppercase text-[#FFFFF] tracking-[-3%]">
          WHAT PEOPLE ARE SAYING
        </p>

        {/* Testimonial Block */}
        <div
          className={`flex flex-col items-center transition-all duration-300 ease-in-out ${fade ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
        >
          <h2 className="font-aeonik font-medium text-[32px] sm:text-[35px] md:text-[42px] lg:text-[55px] xl:text-[60px] leading-[36px] sm:leading-[40px] md:leading-[48px] lg:leading-[55px] xl:leading-[63px] tracking-[-1%] text-[#FFFFFF]">
            “{testimonials[index].text}”
          </h2> 

          <p className="font-aeonik text-[16px] sm:text-[14px] md:text-[18px] lg:text-[18px] xl:text-[18px] font-medium mt-10 md:mt-12 text-[#FFFFFF]">
            {testimonials[index].author}
          </p>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 text-[#F2B2EC] transition-colors cursor-pointer"
      >
        <ChevronRight size={48} strokeWidth={1.5} />
      </button>

    </section>
  );
}