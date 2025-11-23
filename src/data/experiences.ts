import { Experience } from '../types/experience.types';
import projexPicture from '../images/projex_homepage.png';
import projexMobile from '../images/projex_homepage_mobile.png';
import nijiPicture from '../images/niji_homepage.png';
import nijiMobilePicture from '../images/niji_homepage_mobile.png';

export const experiences: Experience[] = [
    {
        id: 'projex',
        company: 'Groupe Projex',
        role: 'Developer intern',
        image: projexPicture,
        mobileImage: projexMobile,
        description: [
            'I first joined Projex for a one-month technical immersion where I learned the fundamentals of HTML, CSS, JavaScript and discovered the React ecosystem. This experience helped me build autonomy and improve my ability to solve problems on my own.',
            'A year later, I returned to Projex for a three-and-a-half-month mission as a React Web Developer. I worked on the development of a platform connecting consultants and clients, using React (TypeScript) and Ant Design, while occasionally interacting with a Node.js and PostgreSQL backend.',
            'During this mission, I strengthened my teamwork and organizational skills through GitLab, Jira and daily team rituals.',
        ],
        duration: '1 + 3,5 months',
        technologies: ['React.js', 'TypeScript', 'SCSS & Ant Design', 'Next.js'],
        orientation: 'left',
    },
    {
        id: 'niji',
        company: 'Niji',
        role: 'Salesforce full-stack developer intern',
        image: nijiPicture,
        mobileImage: nijiMobilePicture,
        description: [
            'During my six-month experience at Niji, I worked as a Full-Stack Salesforce Developer, contributing to both internal tools and external client projects, including Boulanger, Audencia, Europ Assistance, and Philibert.',
            'I developed multiple custom components and pages using Lightning Web Components (LWC), built and optimized Apex triggers, and implemented batch processes for data manipulation and automation.',
            'I contributed to projects involving data anonymization, data extraction, unsubscribe pages, and content-censorship systems. This included delivering features under strict deadlines while ensuring correct logic, responsiveness, and maintainable code.',
            'Throughout this mission, I strengthened my skills in Apex, JavaScript, SOQL, HTML, CSS, and learned to produce efficient, tested, and well-structured code while working under light pressure and meeting deadlines.',
        ],
        duration: '6 months',
        technologies: ['Salesforce', 'Apex', 'JavaScript', 'SOQL'],
        orientation: 'right',
    },
];
