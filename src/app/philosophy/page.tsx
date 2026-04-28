import PageHero from '@/components/sections/PageHero';
import ContactCta from '@/components/sections/ContactCta';

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        label="// My Approach"
        title={<>Engineering <span className="text-highlight">Philosophy</span></>}
        description="The principles, values, and ways of thinking that shape how I build — and why it matters."
      />
      <ContactCta />
    </>
  );
}
