import Image from "next/image"
import { Play, Bookmark, MoreVertical } from "lucide-react"

const data = [
  {
    title: "The Adam Carolla Show",
    author: "Adam Carolla",
    img: "/pod1.png",
  },
  {
    title: "A Lot Of You Have Been Asking with Hayden Cohen",
    author: "Adam Carolla",
    img: "/pod2.png",
  },
  {
    title: "The Adam and Dr. Drew Show",
    author: "Adam Carolla",
    img: "/pod3.png",
  },
  {
    title: "LadyGang",
    author: "Adam Carolla",
    img: "/pod4.png",
  },
]

export default function TrendingLatest() {
  return (
    <section className="bg-[#FDF4E3] w-full flex justify-center">
      <div className="w-full max-w-[1980px] px-8 lg:px-12">
        {/* Heading */}
        <h2 className="font-aeonik font-medium text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] text-[#350A32] mb-5 md:mb-7
 tracking-[-1%]">
          Trending & Latest
        </h2>

        {/* Cards Grid */}
        <div className="flex flex-wrap gap-6 xl:gap-3 mt-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex bg-[#0B0F19] rounded-[24px] overflow-hidden w-full max-w-[850px] h-auto sm:h-[280px]"
            >
              {/* LEFT COLUMN */}
              <div className="w-[100%] lg:w-[35%] relative min-h-[160px]">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* RIGHT COLUMN */}
              <div className="w-[100%] lg:w-[65%] p-5 sm:p-7 xl:p-9 flex flex-col justify-between">
                {/* Top content */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-aeonik text-[16px] sm:text-[14px] text-[#FFFFFF]/68 tracking-[-3%] font-normal">
                      Podcast
                    </p>
                    <MoreVertical className="text-white cursor-pointer hover:text-gray-300" size={20} />
                  </div>

                  <h3 className="font-aeonik text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] font-medium leading-[1.2] text-white">
                    {item.title}
                  </h3>

                  <p className="font-aeonik font-normal text-[#FFFFFF]/68 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[23px] mt-1 sm:mt-2">
                    {item.author}
                  </p>
                </div>

                {/* Bottom icons */}
                <div className="flex justify-between items-end mt-4 sm:mt-6">
                  <Bookmark
                    className="text-[#FFFFFF]/64 cursor-pointer hover:text-white transition-colors w-[26px] h-[32px] sm:w-[28px] sm:h-[28px]"
                  />

                  <button className="bg-[#FF3C3C] hover:bg-red-500 transition-colors w-[46px] h-[46px] sm:w-[54px] sm:h-[54px] flex items-center justify-center rounded-full">
                    <Play className="text-white ml-1" fill="white" size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}