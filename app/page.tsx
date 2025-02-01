import Image from "next/image";
import Footer from "./sections/footer";
import ProductIntro from "./sections/productIntro";
import AdditionalFetures from "./sections/additionalFetures";
import ProductFeatures from "./sections/productFeatures";

export default function Home() {
  return (
    <>
      <ProductIntro />
      <ProductFeatures />
      <AdditionalFetures />
      <Footer />
    </>
  );
}
