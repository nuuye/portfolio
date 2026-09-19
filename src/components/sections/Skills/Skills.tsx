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

    const activeCategoryLabel = skillCategories.find(
        (category) => category.id === activeCategory
    )?.label;

    const activeSkills = getFilteredSkills();

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
                <div className="skills__tabs" role="tablist" aria-label="Skill categories">
                    {skillCategories.map((category) => (
                        <button
                            type="button"
                            role="tab"
                            key={category.id}
                            id={`skills-tab-${category.id}`}
                            aria-selected={isCategoryActive(category.id)}
                            aria-controls="skills-panel"
                            className={`skills__tab ${
                                isCategoryActive(category.id) ? 'skills__tab--active' : ''
                            }`}
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            <span className="skills__tab-label">{category.label}</span>
                            <span className="skills__tab-count">
                                {skills.filter((skill) => skill.category === category.id).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div
                    id="skills-panel"
                    role="tabpanel"
                    aria-labelledby={`skills-tab-${activeCategory}`}
                    className={`skills__content ${
                        isTransitioning ? 'skills__content--transitioning' : ''
                    }`}
                >
                    <div className="skills__content-header">
                        <span>{activeCategoryLabel}</span>
                        <span>{activeSkills.length} technologies</span>
                    </div>
                    <div className="skills__icons">
                        {activeSkills.map((skill, index) => (
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
