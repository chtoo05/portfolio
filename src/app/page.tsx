import Intro from "@/components/intro";
import About from "@/components/about";
import FAQ from "@/components/faq";

export default function Home() {
  return (
    <>
      {/* intro section */}
      <section id="intro" aria-labelledby="intro-heading">
        <Intro />
      </section>
      
      {/* about section */}
      <section id="about" aria-labelledby="about-heading">
        <About />
      </section>

      {/* faq section */}
      <section id="faq" aria-labelledby="faq-heading">
        <FAQ />
      </section>
    </>
  );
}