import AboutSection from "@/components/AboutSection/AboutSection";
import BrowseCategory from "@/components/BrowseCategory/BrowseCategory";
import FeaturedPodcasts from "@/components/FeaturedPodcasts/FeaturedPodcasts";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import LastEpisodes from "@/components/LastEpisodes/LastEpisodes";
import LatestEpisodes from "@/components/LatestEpisodes/LatestEpisodes";
import Logo from "@/components/Logo/Logo";
import PodcastSection from "@/components/PodcastSection/PodcastSection";
import TestimonialSection from "@/components/TestimonialSection/TestimonialSection";
import TopSection from "@/components/TopSection/TopSection";
import TrendingLatest from "@/components/TrendingLatest/TrendingLatest";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <TopSection />
      <AboutSection />
      <TrendingLatest />
      <FeaturedPodcasts />
      <HeroSection />
      <BrowseCategory />
      <TestimonialSection />
      <LatestEpisodes />
      <LastEpisodes />
      <PodcastSection />
      <Logo />
      <Footer />
    </div>
  );
}
