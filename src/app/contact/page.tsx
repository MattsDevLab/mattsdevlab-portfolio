import PageHero from '@/components/sections/PageHero';

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="// Get In Touch"
        title={<>Let&apos;s <span className="text-highlight">Work Together</span></>}
        description="Open to senior frontend and accessibility-focused roles. If you're building something worth caring about, I'd love to hear from you."
      />
    </>
  );
}
