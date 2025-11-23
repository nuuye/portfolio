import React, { useState } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SkillIcon from './SkillIcon';
import { skills, skillCategories } from '../../../data/skills';
import { SkillCategory } from '../../../types/skill.types';
import './Skills.scss';

const Skills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<SkillCategory>('software');

    const getFilteredSkills = () => {
        return skills.filter((skill) => skill.category === activeCategory);
    };

    const isCategoryActive = (categoryId: SkillCategory) => {
        return activeCategory === categoryId;
    };

    return (
        <div className="skills" id="skillsSection">
            <SectionTitle>Skills</SectionTitle>

            <div className="skills__container">
                {/* Tabs */}
                <div className="skills__tabs">
                    {skillCategories.map((category) => (
                        <div
                            key={category.id}
                            className={`skills__tab ${
                                isCategoryActive(category.id) ? 'skills__tab--active' : ''
                            }`}
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.label}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="skills__content">
                    <div className="skills__icons">
                        {getFilteredSkills().map((skill) => (
                            <SkillIcon key={skill.name} skill={skill} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
