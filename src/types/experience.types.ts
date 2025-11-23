export interface Experience {
    id: string;
    company: string;
    role: string;
    image: string;
    mobileImage?: string;
    description: string[];
    duration: string;
    technologies: string[];
    orientation: 'left' | 'right';
}
