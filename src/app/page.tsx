import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileOrderBar } from "@/components/MobileOrderBar";
import { StructuredData } from "@/components/StructuredData";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Menu } from "@/components/sections/Menu";
import { Outlets } from "@/components/sections/Outlets";
import { Reviews } from "@/components/sections/Reviews";
import { InstagramStrip } from "@/components/sections/InstagramStrip";
import { Faq } from "@/components/sections/Faq";
import { Cta } from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main className="flex-1 pb-16 md:pb-0">
        <Hero />
        <Story />
        <Menu />
        <Outlets />
        <Reviews />
        <InstagramStrip />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <MobileOrderBar />
    </>
  );
}
