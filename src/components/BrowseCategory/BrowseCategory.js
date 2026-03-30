import Image from "next/image";

const categories = [
  {
    title: "True Crime",
    image: "/Categories/category-one.png",
  },
  {
    title: "Business",
    image: "/Categories/category-two.png",
  },
  {
    title: "Society & Culture",
    image: "/Categories/category-three.png",
  },
  {
    title: "News",
    image: "/Categories/category-four.png",
  },
  {
    title: "Health & Wellness",
    image: "/Categories/category-five.png",
  },
  {
    title: "Comedy",
    image: "/Categories/category-six.png",
  },
];

export default function BrowseCategory() {
  return (
    <section className="bg-[#FDF4E3] py-12 sm:py-20 w-full flex justify-center overflow-hidden">
      <div className="w-full max-w-[1980px] px-4 md:px-0">

        {/* Heading Container */}
        <div className="px-6 lg:px-12 mb-8 lg:mb-9 border-none">
          <h2 className="font-aeonik font-medium text-[28px] sm:text-[26px] md:text-[36px] lg:text-[40px] xl:text-[40px] text-[#350A32] tracking-tight">
            Browse by Category
          </h2>
        </div>

        {/* Grid */}
        <div className="px-2 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
          {categories.map((item, index) => (
            <div
              key={index}
              className="relative w-full aspect-[16/9] sm:aspect-auto sm:h-[180px] md:h-[220px] lg:h-[260px] xl:h-[300px] rounded-[16px] xl:rounded-[20px] overflow-hidden group cursor-pointer shadow-sm"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none"></div>

              {/* Text */}
              <div className="absolute bottom-5 left-5 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 text-[#FFFFFF] font-aeonik font-medium text-[20px] sm:text-[24px] lg:text-[35px] tracking-[-1%]">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}