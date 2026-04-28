interface PageHeroProps {
  label: React.ReactNode;
  title: React.ReactNode;
  description: string;
}

export default function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__noise" aria-hidden="true" />
      <div className="inner__wrapper">
        <div className="page-hero__content">
          <p className="sub-text">{label}</p>
          <h1 className="page-hero__title">{title}</h1>
          <p className="lead-text page-hero__description">{description}</p>
        </div>
      </div>
    </section>
  );
}
