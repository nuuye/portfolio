import { Experience } from '../types/experience.types';
import projexPicture from '../images/projex.jpg';
import projexMobile from '../images/projexMobile.png';
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
            'I did an internship in an IT center and I was able to learn HTML, CSS, JavaScript and the basics of React.',
            'One year later, I joined Projex again in order to master React (along with TypeScript), the NextJS framework and manipulate databases.',
            'I also familiarized myself with project management tools such as Jibra or Gitlab.',
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
            'I gained hands-on experience in developing with Apex and working within the Salesforce environment.',
            'I developed several custom components using Lightning Web Components (LWC), created and optimized triggers, and implemented batch processing.',
            'This experience sharpened my skills in JavaScript, Apex, and SOQL, allowing me to contribute to the development of dynamic and efficient Salesforce applications.',
        ],
        duration: '6 months',
        technologies: ['Salesforce', 'Apex', 'JavaScript', 'SOQL'],
        orientation: 'right',
    },
];
