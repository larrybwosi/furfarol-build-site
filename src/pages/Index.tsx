import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InfiniteTestimonialsDemo from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="testimonials">
          <InfiniteTestimonialsDemo />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
