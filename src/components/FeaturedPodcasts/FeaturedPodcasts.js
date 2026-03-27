'use client'
import { useRef, useState } from "react"
import Image from "next/image"

// Podcasts data
const podcasts = [
  {
    title: "The Adam Carolla Show",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/Featured/podOne.png",
  },
  {
    title: "The Jordan Harbinger Show",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/Featured/podTwo.png",
  },
  {
    title: "Survived Podcast",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/Featured/podThree.png",
  },
  {
    title: "Crime Time",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/Featured/podFour.png",
  },
  {
    title: "The Adam Carolla Show",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/Featured/podOne.png",
  },
  {
    title: "The Jordan Harbinger Show",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/Featured/podTwo.png",
  },
  {
    title: "Survived Podcast",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/Featured/podThree.png",
  },
  {
    title: "Crime Time",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/Featured/podFour.png",
  },
]

export default function FeaturedPodcasts() {
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-[#FDF4E3] py-6 w-full flex justify-center overflow-hidden select-none">
      <div className="w-full max-w-[1980px]">
        {/* Heading Container */}
        <div className="px-6 lg:px-12 mb-8 lg:mb-8">
          <h2 className="font-aeonik font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] text-[#350A32] tracking-[-1%] mt-12">
            Featured Podcasts
          </h2>
        </div>

        {/* Mouse Draggable CSS Carousel */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto no-scrollbar pb-12 px-6 lg:px-12 ${isDown ? "cursor-grabbing snap-none" : "cursor-grab scroll-smooth snap-x snap-mandatory"
            }`}
        >
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              className="relative w-[300px] sm:w-[400px] md:w-[450px] lg:w-[512px] xl:w-[560px] h-[400px] sm:h-[520px] md:h-[600px] lg:h-[690px] xl:h-[750px] flex-shrink-0 snap-start rounded-[21px] lg:rounded-[21px] overflow-hidden group shadow-lg pointer-events-none"
            >
              {/* Image */}
              <Image
                src={podcast.img}
                alt={podcast.title}
                fill
                draggable={false}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/80 to-transparent pointer-events-none"></div>

              {/* Text Area */}
              <div className="absolute inset-0 p-6 sm:p-8 lg:p-10 flex flex-col justify-end items-start text-left pointer-events-none">
                <h3 className="font-aeonik text-[28px] sm:text-[36px] lg:text-[42px] xl:text-[42px] font-medium leading-[105%] tracking-[-0.02em] text-[#FFFFFF] mb-3 sm:mb-4 min-h-[2.1em] line-clamp-2">
                  {podcast.title}
                </h3>
                <p className="font-aeonik text-[#FFFFFF]/80 text-[14px] sm:text-[16px] xl:text-[18px] leading-[140%] max-w-[95%]">
                  {podcast.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}