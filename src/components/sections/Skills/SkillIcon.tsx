import React from 'react';
import { Skill } from '../../../types/skill.types';
import './SkillIcon.scss';

interface SkillIconProps {
    skill: Skill;
    index?: number;
    isVisible?: boolean;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill, index = 0, isVisible = true }) => {
    return (
        <a
            href={skill.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`Learn more about ${skill.name}`}
            className={`skill-icon ${isVisible ? 'skill-icon--visible' : ''}`}
            style={{ transitionDelay: `${index * 40}ms` }}
        >
            <img
                src={skill.icon}
                alt={`${skill.name} logo`}
                className={skill.className}
            />
            <span>{skill.name}</span>
        </a>
    );
};

export default SkillIcon;
