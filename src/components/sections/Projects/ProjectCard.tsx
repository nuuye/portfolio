import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconContainer from '../../common/IconContainer/IconContainer';
import IconLabelButtons from '../../common/IconLabelButton/IconLabelButtons';
import { Project } from '../../../types/project.types';
import './ProjectCard.scss';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const {
        title,
        description,
        image,
        mobileImage,
        videoDesktop,
        videoMobile,
        githubLink,
        websiteLink,
        websiteLinkText,
        technologies,
        orientation,
    } = project;

    const renderMedia = () => {
        if (videoDesktop) {
            return (
                <>
                    <video
                        src={videoDesktop}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="project-card__video-desktop"
                    />
                    {videoMobile && (
                        <video
                            src={videoMobile}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="project-card__video-mobile"
                        />
                    )}
                </>
            );
        }

        // Classe spéciale pour la calculatrice
        const imageClass = title.includes('Calculator')
            ? 'project-card__image calculator-img' //special width
            : 'project-card__image';

        // Classe spéciale pour OBIS mobile
        const mobileImageClass = title.includes('OBIS')
            ? 'project-card__image-mobile obis-mobile'
            : 'project-card__image-mobile';

        return (
            <>
                <img src={image} alt={`${title} preview`} className={imageClass} />
                {mobileImage && (
                    <img
                        src={mobileImage}
                        alt={`${title} mobile preview`}
                        className={mobileImageClass}
                    />
                )}
            </>
        );
    };

    return (
        <div className={`project-card project-card--${orientation}`}>
            {/* Media Container */}
            <div className="project-card__media">{renderMedia()}</div>

            {/* Content Container */}
            <div className="project-card__content">
                <div className="project-card__description">
                    {description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>

                <div className="project-card__footer">
                    {githubLink && (
                        <a href={githubLink} target="_blank" rel="noreferrer">
                            <IconContainer background="#383939" tooltip="See the code">
                                <GitHubIcon sx={{ color: '#2b86ff' }} />
                            </IconContainer>
                        </a>
                    )}

                    {websiteLink && (
                        <a href={websiteLink} target="_blank" rel="noreferrer">
                            <IconLabelButtons
                                Color="white"
                                Variant="outlined"
                                textTransform="none"
                            >
                                {websiteLinkText || 'Website link'}
                            </IconLabelButtons>
                        </a>
                    )}

                    {technologies.map((tech) => (
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

export default ProjectCard;
