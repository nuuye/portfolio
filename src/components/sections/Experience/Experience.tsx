import React from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionDivider from '../../common/SectionDivider/SectionDivider';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../../../data/experiences';
import './Experience.scss';

const Experience: React.FC = () => {
    return (
        <div className="experience" id="experienceSection">
            <SectionTitle>Experience</SectionTitle>

            {experiences.map((exp, index) => (
                <React.Fragment key={exp.id}>
                    <div
                        className={`experience__item experience__item--${exp.orientation}`}
                    >
                        <ExperienceCard experience={exp} />
                    </div>
                    {index < experiences.length - 1 && <SectionDivider />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Experience;
