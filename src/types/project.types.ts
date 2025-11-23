export interface Project {
    id: string;
    title: string;
    description: string[];
    image?: string;
    mobileImage?: string;
    videoDesktop?: string;
    videoMobile?: string;
    githubLink?: string;
    websiteLink?: string;
    websiteLinkText?: string;
    technologies: string[];
    orientation: 'left' | 'right';
}