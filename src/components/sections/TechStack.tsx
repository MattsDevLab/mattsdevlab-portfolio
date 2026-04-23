import {
    LightningIcon,
    StackIcon,
    CrownIcon ,
    FrameCornersIcon,
    EyeIcon,
    CubeIcon,
} from '@phosphor-icons/react/dist/ssr';
import { techCards, TechCard } from '@/data/skills';
import { type Icon } from '@phosphor-icons/react';

const iconMap: Record<string, Icon> = {
    lightning: LightningIcon,
    stack: StackIcon,
    crown: CrownIcon ,
    'frame-corners': FrameCornersIcon,
    eye: EyeIcon,
    cube: CubeIcon,
};

export default function TechStack() {
    return (
        <section className="tech-stack s-pad">
            <div className="inner__wrapper">
                <div className="tech-stack__header">
                    <div className="tech-stack__header-lh">
                        <p className="sub-text">// Core Capabilities</p>
                        <h2 className="tech-stack__title"><span className="text-highlight">Engineering</span> Expertise</h2>
                    </div>
                    <p className="tech-stack__intro lead-text">
                        Architecting accessible, scalable frontend systems — from technical strategy and client consultancy to high-performance delivery.
                    </p>
                </div>
                <ul className="tech-stack__grid" aria-label="Core technology areas">
                    {techCards.map((card: TechCard) => {
                        const Icon = iconMap[card.iconId];
                        return (
                            <li
                                key={card.id}
                                className={`tech-card card${card.featured ? ' tech-card--featured' : ''}`}
                            >
                                <span className="tech-card__icon" aria-hidden="true">
                                    {Icon && <Icon size={28} weight="duotone" />}
                                </span>
                                <h3 className="tech-card__title heading-h4">{card.title}</h3>
                                <p className="tech-card__description">{card.description}</p>
                                <ul className="tech-card__tags" aria-label={`${card.title} technologies`}>
                                    {card.tags.map((tag) => (
                                        <li key={tag} className="tech-card__tag tag">{tag}</li>
                                    ))}
                                </ul>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}