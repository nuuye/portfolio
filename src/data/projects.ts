import { Project } from '../types/project.types';
import calculatorGIF from '../images/calculatorGIF.gif';
import dominion from '../images/dominionCapture.png';
import dominionMobile from '../images/dominionMobile.png';
import obisGIF from '../images/obisGIF.gif';
import obisMobile from '../images/obisMobile.gif';
import planyPreview from '../images/plany_preview.gif';
import planyPreviewMobile from '../images/plany_preview_mobile.gif';

export const projects: Project[] = [
    {
        id: 'calculator',
        title: 'Windows Calculator Clone',
        description: [
            'This project is a replica of the classic Windows Calculator built using React.js.',
            'The goal of this project was to create a functional and visually similar version of the original calculator using modern web development technologies.',
            'The calculator features all the basic functions such as addition, subtraction, multiplication, and division, as well as advanced functions.',
            'The user interface has been designed to closely match the original calculator, with a simple and easy-to-use layout.',
        ],
        image: calculatorGIF,
        githubLink: 'https://github.com/nuuye/my-calculator',
        technologies: ['React.js', 'TypeScript', 'Scss'],
        orientation: 'left',
    },
    {
        id: 'dominion',
        title: 'Dominion Card Game',
        description: [
            'This project is a command-line implementation of the popular card game Dominion, created using C++.',
            'Dominion is a deck-building card game known for its strategic depth and intricate card interactions.',
            'The primary objective of this project was to replicate the gameplay experience of Dominion for two players in a text-based format.',
            'The user interface is designed for ease of use within the command-line environment, allowing players to input their actions and make strategic decisions through simple text-based commands.',
        ],
        image: dominion,
        mobileImage: dominionMobile,
        githubLink: 'https://github.com/nuuye/Dominion-Game',
        technologies: ['C++', 'CMake'],
        orientation: 'right',
    },
    {
        id: 'obis',
        title: 'OBIS 3D Viewer',
        description: [
            'An application showing data from the Ocean Biodiversity Information System (OBIS) on a 3D globe.',
            'You can choose the species and specify a date range.',
            'Moving the globe is possible and the interface was made using scene builder.',
        ],
        image: obisGIF,
        mobileImage: obisMobile,
        technologies: ['Java', 'JavaFX', 'Scene Builder'],
        orientation: 'left',
    },
    {
        id: 'plany',
        title: 'Plany - Task Manager',
        description: [
            'Plany is a task management application designed to help users efficiently organize their daily activities.',
            'Built with React for the frontend and Node.js with Express for the backend, it features an intuitive and responsive user interface powered by Chakra UI.',
            'Users can create, edit, and delete tasks while tracking their progress. Data is securely stored in a MongoDB database. Moreover passwords are hashed with bcrypt and user authentification is done using JWT.',
        ],
        image: planyPreview,
        mobileImage: planyPreviewMobile,
        githubLink: 'https://github.com/nuuye/plany',
        websiteLink: 'https://plany-blond.vercel.app/',
        websiteLinkText: 'Website link',
        technologies: ['React', 'Node.js', 'MongoDB', 'Next.js'],
        orientation: 'right',
    },
    {
        id: 'fitlogs',
        title: 'FitLogs - Fitness Tracker',
        description: [
            'FitLogs is a fitness logging web application designed to help users track their workouts and monitor their progress over time.',
            'Users can record all their exercises with sets, reps and weights, and then visualize their performance through interactive charts. The app offers a secure login system using bcrypt, and also supports Google authentification for quicker access.',
            'The web-app includes several pages such as the landing page, settings, blog, pricing, FAQ, a dashboard for entering workout data, and an analytics page for tracking overall progress.',
            'FitLogs is fully deployed on AWS with Docker, using automation scripts to manage container startup and environment configuration.',
        ],
        videoDesktop: '/videos/fitlogsVideo.mp4',
        videoMobile: '/videos/fitlogsMobileVideo.mp4',
        githubLink: 'https://github.com/nuuye/fitness-app-logger',
        websiteLink: 'https://fitlogs.fr',
        websiteLinkText: 'Website link (server off)',
        technologies: [
            'React',
            'Node.js',
            'MongoDB',
            'Next.js',
            'Docker',
            'MaterialUI',
            'AWS',
            'Bash',
            'CI/CD',
        ],
        orientation: 'left',
    },
];
