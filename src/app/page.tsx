import Hero from '@/components/sections/Hero';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import AboutPreview from '@/components/sections/AboutPreview';
import TechStack from '@/components/sections/TechStack';
import PhilosophyPreview from '@/components/sections/PhilosophyPreview';
import ContactCta from '@/components/sections/ContactCta';

export default function HomePage(){
  return(
    <>
      <Hero />
      <FeaturedProjects />
      <AboutPreview />
      <TechStack />
      <PhilosophyPreview />
      <ContactCta />
    </>
  )
}