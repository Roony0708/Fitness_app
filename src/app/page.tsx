import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import MouseGlow from "@/components/MouseGlow";
import FloatingCTA from "@/components/FloatingCTA";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import WhyChooseUs from "@/components/WhyChooseUs";
import Transformation from "@/components/Transformation";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <MouseGlow />
      <FloatingCTA />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Pricing />
        <Transformation />
        <Gallery />
        <Testimonials />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
