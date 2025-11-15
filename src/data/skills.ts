import { Skill, SkillCategoryConfig } from '../types/skill.types';
import cppPicture from '../images/c++.png';
import javaPicture from '../images/java.png';
import pythonPicture from '../images/python.png';
import cmakePicture from '../images/cmake.png';
import htmlPicture from '../images/html.png';
import cssPicture from '../images/css.png';
import jsPicture from '../images/js.png';
import tsPicture from '../images/ts.png';
import reactPicture from '../images/react.png';
import materialPicture from '../images/material.png';
import antPicture from '../images/ant.png';
import nodejsPicture from '../images/nodejs.png';
import postmanPicture from '../images/postman.png';
import postgrePicture from '../images/postgre.png';
import metasploitPicture from '../images/metasploit.png';
import johnTheRipperPicture from '../images/johntheripper.png';
import burpSuitePicture from '../images/burpsuite.png';
import nmapPicture from '../images/nmap.png';
import kaliLinuxPicture from '../images/kaliLinux.png';
import hydraPicture from '../images/hydra.png';
import mongoDBPicture from '../images/mongodb.svg';

export const skills: Skill[] = [
    // Software Development
    {
        name: 'C++',
        icon: cppPicture,
        link: 'https://en.wikipedia.org/wiki/C%2B%2B',
        category: 'software',
    },
    {
        name: 'Java',
        icon: javaPicture,
        link: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
        category: 'software',
        className: 'javaLogo',
    },
    {
        name: 'Python',
        icon: pythonPicture,
        link: 'https://www.python.org/',
        category: 'software',
    },
    {
        name: 'CMake',
        icon: cmakePicture,
        link: 'https://cmake.org/',
        category: 'software',
    },

    // Frontend
    {
        name: 'HTML',
        icon: htmlPicture,
        link: 'https://en.wikipedia.org/wiki/HTML',
        category: 'frontend',
    },
    {
        name: 'CSS',
        icon: cssPicture,
        link: 'https://en.wikipedia.org/wiki/CSS',
        category: 'frontend',
        className: 'cssLogo',
    },
    {
        name: 'JavaScript',
        icon: jsPicture,
        link: 'https://en.wikipedia.org/wiki/JavaScript',
        category: 'frontend',
    },
    {
        name: 'TypeScript',
        icon: tsPicture,
        link: 'https://www.typescriptlang.org/',
        category: 'frontend',
    },
    {
        name: 'React',
        icon: reactPicture,
        link: 'https://react.dev/',
        category: 'frontend',
    },
    {
        name: 'Ant Design',
        icon: antPicture,
        link: 'https://ant.design/',
        category: 'frontend',
    },
    {
        name: 'Material UI',
        icon: materialPicture,
        link: 'https://mui.com/',
        category: 'frontend',
    },

    // Backend
    {
        name: 'MongoDB',
        icon: mongoDBPicture,
        link: 'https://www.mongodb.com/fr-fr',
        category: 'backend',
        className: 'mongodbLogo',
    },
    {
        name: 'PostgreSQL',
        icon: postgrePicture,
        link: 'https://www.postgresql.org/',
        category: 'backend',
        className: 'postgreLogo',
    },
    {
        name: 'Postman',
        icon: postmanPicture,
        link: 'https://www.postman.com/',
        category: 'backend',
    },
    {
        name: 'NodeJS',
        icon: nodejsPicture,
        link: 'https://en.wikipedia.org/wiki/Node.js',
        category: 'backend',
    },

    // Security
    {
        name: 'Metasploit',
        icon: metasploitPicture,
        link: 'https://www.metasploit.com/',
        category: 'security',
    },
    {
        name: 'Nmap',
        icon: nmapPicture,
        link: 'https://nmap.org/',
        category: 'security',
    },
    {
        name: 'Burp Suite',
        icon: burpSuitePicture,
        link: 'https://portswigger.net/burp/documentation/desktop/getting-started',
        category: 'security',
    },
    {
        name: 'Kali Linux',
        icon: kaliLinuxPicture,
        link: 'https://www.kali.org/',
        category: 'security',
    },
    {
        name: 'Hydra',
        icon: hydraPicture,
        link: 'https://www.kali.org/tools/hydra/',
        category: 'security',
    },
    {
        name: 'John the Ripper',
        icon: johnTheRipperPicture,
        link: 'https://www.openwall.com/john/doc/',
        category: 'security',
    },
];

export const skillCategories: SkillCategoryConfig[] = [
    {
        id: 'software',
        label: 'Software Development',
        displayIndex: '0',
    },
    {
        id: 'frontend',
        label: 'Front-end Web',
        displayIndex: '1',
    },
    {
        id: 'backend',
        label: 'Back-end Web',
        displayIndex: '2',
    },
    {
        id: 'security',
        label: 'Cybersecurity tools',
        displayIndex: '3',
    },
];
