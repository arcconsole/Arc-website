import Footer from "./sections/footer";
import ProductIntro from "./sections/productIntro";
import AdditionalFetures from "./sections/additionalFetures";
import ProductFeatures from "./sections/productFeatures";
import Hero from "./sections/hero";
import NavBar from "./sections/navBar";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <Hero />
      <ProductIntro />
      <ProductFeatures />
      <AdditionalFetures />
      <Footer />
    </div>
  );
}
