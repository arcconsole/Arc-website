import Image from "next/image";
import Footer from "./sections/footer";
import ProductIntro from "./sections/productIntro";
import AdditionalFetures from "./sections/additionalFetures";
import ProductFeatures from "./sections/productFeatures";
import Hero from "./sections/hero";
import NavBar from "./sections/navBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <ProductIntro />
      <ProductFeatures />
      <AdditionalFetures />
      <Footer />
    </>
  );
}
