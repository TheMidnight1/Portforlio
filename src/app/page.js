import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <ContactCTA />
    </main>
  );
}