import Image from "next/image";
import Footer from "./sections/footer";
import ProductIntro from "./sections/productIntro";
import AdditionalFetures from "./sections/additionalFetures";

export default function Home() {
  return (
    <>
      <ProductIntro />
      <AdditionalFetures />
      <Footer />
    </>
  );
}
