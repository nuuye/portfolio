import React from 'react';
import IconLabelButtons from '../../common/IconLabelButton/IconLabelButtons';
import { Experience } from '../../../types/experience.types';
import './ExperienceCard.scss';

interface ExperienceCardProps {
    experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
    const {
        company,
        role,
        image,
        mobileImage,
        description,
        duration,
        technologies,
        orientation,
    } = experience;

    return (
        <div className={`experience-card experience-card--${orientation}`}>
            {/* Image & Company Info Container */}
            <div className="experience-card__header">
                <div className="experience-card__image-wrapper">
                    <img
                        src={image}
                        alt={`${company} logo`}
                        className="experience-card__image"
                    />
                    {mobileImage && (
                        <img
                            src={mobileImage}
                            alt={`${company} mobile logo`}
                            className="experience-card__image-mobile"
                        />
                    )}
                </div>
                <div className="experience-card__company-info">
                    <span className="experience-card__company-name">{company}</span>
                    <span className="experience-card__role">{role}</span>
                </div>
            </div>

            {/* Content Container */}
            <div className="experience-card__content">
                <div className="experience-card__description">
                    {description.map((paragraph: any, index: any) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="experience-card__footer">
                    <IconLabelButtons
                        Variant="outlined"
                        textTransform="none"
                        Color="white"
                    >
                        {duration}
                    </IconLabelButtons>

                    {technologies.map((tech: any) => (
                        <IconLabelButtons
                            key={tech}
                            Variant="outlined"
                            textTransform="none"
                        >
                            {tech}
                        </IconLabelButtons>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
