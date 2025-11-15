import React from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import SectionDivider from '../../common/SectionDivider/SectionDivider';
import ProjectCard from './ProjectCard';
import { projects } from '../../../data/projects';
import './Projects.scss';

const Projects: React.FC = () => {
    return (
        <div className="projects" id="projectsSection">
            <SectionTitle>Projects</SectionTitle>

            {projects.map((project, index) => (
                <React.Fragment key={project.id}>
                    <ProjectCard project={project} />
                    {index < projects.length - 1 && <SectionDivider />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Projects;
