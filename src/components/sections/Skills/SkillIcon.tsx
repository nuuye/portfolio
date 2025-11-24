import React from 'react';
import { Skill } from '../../../types/skill.types';
import './SkillIcon.scss';

interface SkillIconProps {
    skill: Skill;
    index?: number;
    isVisible?: boolean;
}

const SkillIcon: React.FC<SkillIconProps> = ({ skill }) => {
    return (
        <a href={skill.link} target="_blank" rel="noreferrer" className="skill-icon">
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
