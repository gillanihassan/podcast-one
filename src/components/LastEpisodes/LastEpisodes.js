import Image from "next/image";
import { Play, MoreHorizontal } from "lucide-react";

const episodes = [
  {
    image: "/last/epi1.png",
    title: "Why You Should Sleep 16 Hours a Day",
    date: "Resume • May 15",
    desc: "Discover the fascinating world of feline sleep patterns and learn why your cat may be onto something.",
    time: "11m",
  },
  {
    image: "/last/epi2.png",
    title: "Why You Should Sleep 16 Hours a Day",
    date: "Resume • May 15",
    desc: "Discover the fascinating world of feline sleep patterns and learn why your cat may be onto something.",
    time: "11m",
  },
  {
    image: "/last/epi3.png",
    title: "Why You Should Sleep 16 Hours a Day",
    date: "Resume • May 15",
    desc: "Discover the fascinating world of feline sleep patterns and learn why your cat may be onto something.",
    time: "11m",
  },
  {
    image: "/last/epi4.png",
    title: "Why You Should Sleep 16 Hours a Day",
    date: "Resume • May 15",
    desc: "Discover the fascinating world of feline sleep patterns and learn why your cat may be onto something.",
    time: "11m",
  },
];

export default function LatestEpisodes() {
  return (
    <section className="bg-[#FDF4E3] w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-[1940px]">
        {/* Heading Container */}
        <div className="px-2 lg:px-12 mb-7 lg:mb-7">
          <h2 className="font-aeonik font-medium text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[40px] text-[#350A32] tracking-[-1%]" >
            Most Popular Episodes
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="px-4 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-5 justify-center">
          {episodes.map((ep, index) => (
            <div
              key={index}
              className="bg-[#0B0F19] rounded-[18px] xl:rounded-[18px] overflow-hidden flex flex-col group cursor-pointer shadow-sm w-full min-h-[516px]"
            >
              {/* Image */}
              <div className="relative w-full h-[314px] overflow-hidden">
                <Image
                  src={ep.image}
                  alt={ep.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow text-white">
                <p className="font-aeonik text-[11px] sm:text-[11px] text-[#C2C2C2]/50 font-medium uppercase mb-3">
                  {ep.date}
                </p>

                <h3 className="font-aeonik font-medium text-[18px] sm:text-[18px] xl:text-[19px] leading-[18px] sm:leading-[19px] md:leading-[20px] lg:leading-[22px] xl:leading-[23px] mb-2 pr-6 text-[#FFFFFF]">
                  {ep.title}
                </h3>

                <p className="font-aeonik font-normal text-[13px] sm:text-[13px] text-[#FFFFFF]/50 font-normal mb-6 leading-[12px] sm:leading-[13px] md:leading-[14px] lg:leading-[15px] xl:leading-[16px] tracking-[-0.08px]">
                  {ep.desc}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  {/* Play Button */}
                  <button className="flex items-center justify-center gap-1.5 bg-white text-black px-3 py-1.5 rounded-full text-[12px] font-bold hover:scale-105 transition-transform w-fit">
                    <Play size={12} fill="currentColor" />
                    <span>{ep.time}</span>
                  </button>

                  <button className="text-[#FFFFFF]/50 hover:text-white transition-colors">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}