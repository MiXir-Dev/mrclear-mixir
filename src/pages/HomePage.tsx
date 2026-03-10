import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeSeo from "@/components/home/HomeSeo";
import { useSmoothScroll } from "@/components/home/useSmoothScroll";
import Services from "@/components/Services";
import StickyCTA from "@/components/StickyCTA";
import Testimonials from "@/components/Testimonials";
import { ServiceAreaPageContent } from "@/consts/service-area-content";

interface HomePageProps {
  serviceArea?: ServiceAreaPageContent;
}

const HomePage = ({ serviceArea }: HomePageProps) => {
  useSmoothScroll();

  return (
    <div className="min-h-screen flex flex-col">
      <HomeSeo serviceArea={serviceArea} />
      <Header />
      <main>
        <Hero
          title={serviceArea?.heroTitle}
          subtitle={serviceArea?.heroSubtitle}
        />
        <About introParagraph={serviceArea?.aboutParagraph} />
        <Services introParagraph={serviceArea?.serviceIntro} />
        <Features />
        <Testimonials />
        <CTA
          heading={serviceArea?.ctaHeading}
          subheading={serviceArea?.ctaSubheading}
        />
        <FAQ
          introParagraph={serviceArea?.faqIntro}
          items={serviceArea?.faqItems}
        />
        <Contact supportingCopy={serviceArea?.contactSupportingCopy} />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default HomePage;
