import React, { useState } from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SkillIcon from './SkillIcon';
import { skills, skillCategories } from '../../../data/skills';
import { SkillCategory } from '../../../types/skill.types';
import './Skills.scss';

const Skills: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<SkillCategory>('software');
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showIcons, setShowIcons] = useState(true);

    const getFilteredSkills = () => {
        return skills.filter((skill) => skill.category === activeCategory);
    };

    const isCategoryActive = (categoryId: SkillCategory) => {
        return activeCategory === categoryId;
    };

    const handleCategoryChange = (categoryId: SkillCategory) => {
        if (categoryId === activeCategory) return;

        setIsTransitioning(true);
        setShowIcons(false);

        setTimeout(() => {
            setActiveCategory(categoryId);
            setIsTransitioning(false);

            // Petit délai pour permettre au DOM de se mettre à jour
            setTimeout(() => {
                setShowIcons(true);
            }, 50);
        }, 200);
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
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            {category.label}
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div
                    className={`skills__content ${
                        isTransitioning ? 'skills__content--transitioning' : ''
                    }`}
                >
                    <div className="skills__icons">
                        {getFilteredSkills().map((skill, index) => (
                            <SkillIcon
                                key={skill.name}
                                skill={skill}
                                index={index}
                                isVisible={showIcons}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
