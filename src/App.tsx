import React, { useEffect, useState } from 'react';
import './App.scss';

import photo from '../src/images/photo3.png';
import calculatorGIF from '../src/images/calculatorGIF.gif';
import dominion from '../src/images/dominionCapture.png';
import obisGIF from '../src/images/obisGIF.gif';
import IconContainer from './components/iconContainer/iconContainer';
import cppPicture from '../src/images/c++.png';
import javaPicture from '../src/images/java.png';
import pythonPicture from '../src/images/python.png';
import cmakePicture from '../src/images/cmake.png';
import htmlPicture from '../src/images/html.png';
import cssPicture from '../src/images/css.png';
import jsPicture from '../src/images/js.png';
import tsPicture from '../src/images/ts.png';
import reactPicture from '../src/images/react.png';
import materialPicture from '../src/images/material.png';
import antPicture from '../src/images/ant.png';
import projexPicture from '../src/images/projex.jpg';
import nodejsPicture from '../src/images/nodejs.png';
import postmanPicture from '../src/images/postman.png';
import postgrePicture from '../src/images/postgre.png';
import metasploitPicture from '../src/images/metasploit.png';
import johnTheRipperPicture from '../src/images/johntheripper.png';
import burpSuitePicture from '../src/images/burpsuite.png';
import nmapPicture from '../src/images/nmap.png';
import kaliLinuxPicture from '../src/images/kaliLinux.png';
import hydraPicture from '../src/images/hydra.png';
import projexMobile from '../src/images/projexMobile.png';
import mongoDBPicture from '../src/images/mongodb.svg';
import planyPreview from '../src/images/plany_preview.gif';
import planyPreviewMobile from '../src/images/plany_preview_mobile.gif';
import dominionMobile from '../src/images/dominionMobile.png';
import obisMobile from '../src/images/obisMobile.gif';
import nijiPicture from '../src/images/niji_homepage.png';
import nijiMobilePicture from '../src/images/niji_homepage_mobile.png';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import IconLabelButtons from './components/IconLabelButton/IconLabelButtons';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Button from '@mui/material/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import QueryStatsIcon from '@mui/icons-material/QueryStats';
import SchoolIcon from '@mui/icons-material/School';
import ArticleIcon from '@mui/icons-material/Article';
import InterestsIcon from '@mui/icons-material/Interests';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TranslateIcon from '@mui/icons-material/Translate';

const customPresentationButtonStyle = {
    textTransform: 'none',
    whiteSpace: 'normal',
    textAlign: 'left',
    borderRadius: 4,
    lineHeight: 1.4,
    color: '#2b86ff',
};

function App() {
    const [display, setDisplay] = useState<string>('0');
    const [softwareBorderRightVisible, setSoftwareBorderRightVisible] = useState(false);
    const [frontBorderRightVisible, setFrontBorderRightVisible] = useState(true);
    const [backBorderRightVisible, setBackBorderRightVisible] = useState(true);
    const [securityBorderRightVisible, setSecurityBorderRightVisible] = useState(true);

    const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
    const [visible, setVisible] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 50);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    const scrollToSection = (sectionId: string) => {
        const targetElement = document.getElementById(sectionId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="App">
            <header className={visible ? '' : 'hidden'}>
                <button
                    className="homeButton"
                    onClick={() => scrollToSection('firstContainerSection')}
                >
                    <HomeIcon sx={{ fontSize: 32, color: '#2b86ff' }} />
                </button>
                <div className="rightButtons">
                    <IconLabelButtons
                        Variant="text"
                        onClick={() => scrollToSection('projectsSection')}
                    >
                        Projects
                    </IconLabelButtons>
                    <IconLabelButtons
                        Variant="text"
                        onClick={() => scrollToSection('skillsSection')}
                    >
                        Skills
                    </IconLabelButtons>
                    <IconLabelButtons
                        Variant="text"
                        onClick={() => scrollToSection('experienceSection')}
                    >
                        Experience
                    </IconLabelButtons>
                    <IconLabelButtons
                        Icon={<ArrowForwardIosRoundedIcon />}
                        onClick={() => scrollToSection('contactSection')}
                    >
                        Contact
                    </IconLabelButtons>
                </div>
            </header>
            <body>
                <div className="mainContainer" id="firstContainerSection">
                    <div className="leftContainer">
                        <div className="preContainer">
                            <div className="imgContainer">
                                <Avatar
                                    alt="Thomas"
                                    src={photo}
                                    sx={{ width: 175, height: 175 }}
                                />
                            </div>
                        </div>
                        <div className="textContainer">
                            <span>Thomas Mostowfi</span>
                            <span>Computer science engineer</span>
                            <span>24 years old</span>
                        </div>
                        <div className="contactContainer">
                            <div className="temporaryDiv">
                                <div>
                                    <div className="infoContainer">
                                        <IconContainer background="#373743">
                                            <ConnectWithoutContactIcon
                                                sx={{ color: '#2b86ff' }}
                                            />
                                        </IconContainer>
                                        <Button
                                            variant="text"
                                            sx={customPresentationButtonStyle}
                                        >
                                            <span>Socials skills</span>
                                            <span>Sociable, dedicated and rigorous</span>
                                        </Button>
                                    </div>
                                    <div className="infoContainer">
                                        <IconContainer background="#373743">
                                            <TranslateIcon
                                                sx={{
                                                    color: '#2b86ff',
                                                }}
                                            />
                                        </IconContainer>
                                        <Button
                                            variant="text"
                                            sx={customPresentationButtonStyle}
                                        >
                                            <span>Languages</span>
                                            <span>
                                                English (toeic 830 ≈ B2), French (fluent)
                                            </span>
                                        </Button>
                                    </div>
                                </div>
                                <div>
                                    <a
                                        href="https://github.com/nuuye"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="infoContainer">
                                            <IconContainer background="#373743">
                                                <GitHubIcon sx={{ color: '#2b86ff' }} />
                                            </IconContainer>
                                            <Button
                                                variant="text"
                                                sx={customPresentationButtonStyle}
                                            >
                                                <span>GitHub</span>
                                                <span>https://github.com/nuuye</span>
                                            </Button>
                                        </div>
                                    </a>
                                    <a
                                        href="https://www.google.it/maps/place/Hellemmes-Lille,+Lille/@50.6258822,3.0889245,14z/data=!3m1!4b1!4m6!3m5!1s0x47c2d60fdbd8e5f1:0xe8420a6c3e86c873!8m2!3d50.6312585!4d3.1114773!16s%2Fg%2F11_t9ycrq?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <div className="infoContainer">
                                            <IconContainer background="#373743">
                                                <LocationOnIcon
                                                    sx={{ color: '#2b86ff' }}
                                                />
                                            </IconContainer>
                                            <Button
                                                variant="text"
                                                sx={customPresentationButtonStyle}
                                            >
                                                <span>Location</span>
                                                <span>Hellemmes, Lille - France</span>
                                            </Button>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div>
                            <span className="headerText">About me</span>
                        </div>
                        <div className="presentationContainer">
                            <p>
                                👋 Hello, I'm Thomas Mostowfi. I recently graduated from
                                Polytech Paris-Saclay with a degree in computer science.
                            </p>
                            <p>
                                I am now actively seeking new opportunities, with a strong
                                interest in development and cybersecurity. My background
                                in web development and recent experience in software
                                development provide a solid foundation, and I'm eager to
                                apply my skills to real world challenges.
                            </p>
                            <p>
                                If you have a role or project that aligns with my skills
                                and ambitions, I'd love to connect and explore how I can
                                make a positive impact.
                            </p>
                        </div>
                        <div className="backgroundContainer">
                            <div className="firstBackgroundContainer">
                                <div className="titleContainer">
                                    <IconContainer background="#373743">
                                        <SchoolIcon color="primary" />
                                    </IconContainer>
                                    <span>Education (Graduated in 2024)</span>
                                </div>
                                <div className="listContainer">
                                    <List dense={true} sx={{ paddingTop: 0 }}>
                                        <ListItem divider>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Sapienza Università di Roma, Rome, Italie"
                                                secondary={
                                                    'I went to La Sapienza for 6 months to study computer science.'
                                                }
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <FiberManualRecordIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Polytech Paris-Saclay, Orsay, Paris"
                                                secondary={
                                                    'I chose the Computer Science specialty and I aim to work in the field of programming or cyber-security.'
                                                }
                                            />
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                            <div className="secondBackgroundContainer">
                                <div className="titleContainer">
                                    <IconContainer background="#373743">
                                        <InterestsIcon sx={{ color: '#2b86ff' }} />
                                    </IconContainer>
                                    <span>Interest</span>
                                </div>
                                <div className="listContainer">
                                    <List dense={true} sx={{ paddingTop: 0 }}>
                                        <ListItem divider>
                                            <ListItemIcon>
                                                <FitnessCenterIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Sports"
                                                secondary={'Tennis, gym'}
                                            />
                                        </ListItem>
                                        <ListItem divider>
                                            <ListItemIcon>
                                                <QueryStatsIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Trading"
                                                secondary={''}
                                            />
                                        </ListItem>
                                        <ListItem divider>
                                            <ListItemIcon>
                                                <ArticleIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Technology news"
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <TravelExploreIcon
                                                    fontSize="small"
                                                    sx={{ color: '#ffffffad' }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    color: '#ffffffad',
                                                }}
                                                secondaryTypographyProps={{
                                                    color: '#ffffff67',
                                                }}
                                                primary="Cybersecurity"
                                            />
                                        </ListItem>
                                    </List>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondContainer" id="projectsSection">
                    <span>Projects</span>
                    <div className="firstProject">
                        <div className="firstProjectContainer">
                            <img
                                src={calculatorGIF}
                                alt="calculatorPhoto"
                                className="calculatorIMG"
                            />
                        </div>
                        <div className="firstProjectSecondContainer">
                            <div className="firstProjectTextContainer">
                                <div>
                                    <p>
                                        This project is a replica of the classic Windows
                                        Calculator built using React.js.
                                    </p>
                                    <p>
                                        The goal of this project was to create a
                                        functional and visually similar version
                                        <br />
                                        of the original calculator using modern web
                                        development technologies.
                                    </p>
                                    <p>
                                        The calculator features all the basic functions
                                        such as addition, subtraction,
                                        <br />
                                        multiplication, and division, as well as advanced
                                        functions.
                                    </p>
                                    <p>
                                        The user interface has been designed to closely
                                        match the original calculator,
                                        <br />
                                        with a simple and easy-to-use layout.
                                    </p>
                                </div>
                            </div>
                            <div className="projectIconContainer">
                                <a
                                    href="https://github.com/nuuye/my-calculator"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconContainer
                                        background="#383939"
                                        tooltip="See the code"
                                    >
                                        <GitHubIcon sx={{ color: '#2b86ff' }} />
                                    </IconContainer>
                                </a>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    React.js
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    TypeScript
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Scss
                                </IconLabelButtons>
                            </div>
                        </div>
                    </div>
                    <div className="diviser"></div>
                    <div className="secondProject">
                        <div className="secondProjectSecondContainer">
                            <div className="secondProjectTextContainer">
                                <div>
                                    <p>
                                        This project is a command-line implementation of
                                        the popular card game Dominion, created using C++.
                                    </p>
                                    <p>
                                        Dominion is a deck-building card game known for
                                        its strategic depth and intricate card
                                        interactions.
                                    </p>
                                    <p>
                                        The primary objective of this project was to
                                        replicate the gameplay experience of Dominion for
                                        two players in a text-based format.
                                    </p>
                                    <p>
                                        The user interface is designed for ease of use
                                        within the command-line environment, allowing
                                        players to input their actions and make strategic
                                        decisions through simple text-based commands.{' '}
                                    </p>
                                </div>
                            </div>
                            <div className="projectIconContainer">
                                <a
                                    href="https://github.com/nuuye/Dominion-Game"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconContainer
                                        background="#383939"
                                        tooltip="See the code"
                                    >
                                        <GitHubIcon sx={{ color: '#2b86ff' }} />
                                    </IconContainer>
                                </a>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    C++
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    CMake
                                </IconLabelButtons>
                            </div>
                        </div>
                        <div className="secondProjectContainer">
                            <img src={dominion} alt="Dominion_Project" />
                            <img
                                src={dominionMobile}
                                alt="DominionMobilePicture"
                                className="dominionMobile"
                            />
                        </div>
                    </div>
                    <div className="diviser"></div>
                    <div className="thirdProject">
                        <div className="thirdProjectContainer">
                            <img src={obisGIF} alt="obisProjectGIF" />
                            <img
                                src={obisMobile}
                                alt="obisProjectGIFMobile"
                                className="obisMobile"
                            />
                        </div>
                        <div className="thirdProjectSecondContainer">
                            <div className="thirdProjectTextContainer">
                                <div>
                                    <p>
                                        An application showing data from the Ocean
                                        Biodiversity Information System (OBIS) on a 3D
                                        globe.{' '}
                                        <p>
                                            You can choose the species and specify a date
                                            range.
                                        </p>
                                        <p>
                                            Mooving the globe is possible and the
                                            interface was made using scene builder.
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <div className="projectIconContainer">
                                <IconContainer
                                    background="#383939"
                                    tooltip="See the code"
                                >
                                    <GitHubIcon sx={{ color: '#2b86ff' }} />
                                </IconContainer>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Java
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    JavaFX
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Scene Builder
                                </IconLabelButtons>
                            </div>
                        </div>
                    </div>
                    <div className="diviser"></div>
                    <div className="fourthProject">
                        <div className="fourthProjectFourthContainer">
                            <div className="fourthProjectTextContainer">
                                <div>
                                    <p>
                                        Plany is a task management application designed to
                                        help users efficiently organize their daily
                                        activities.
                                    </p>
                                    <p>
                                        Built with React for the frontend and Node.js with
                                        Express for the backend, it features an intuitive
                                        and responsive user interface powered by Chakra
                                        UI.
                                    </p>
                                    <p>
                                        Users can create, edit, and delete tasks while
                                        tracking their progress. Data is securely stored
                                        in a MongoDB database. Moreover passwords are
                                        hashed with bcrypt and user authentification is
                                        done using JWT.
                                    </p>
                                </div>
                            </div>
                            <div className="projectIconContainer">
                                <a
                                    href="https://github.com/nuuye/plany"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconContainer
                                        background="#383939"
                                        tooltip="See the code"
                                    >
                                        <GitHubIcon sx={{ color: '#2b86ff' }} />
                                    </IconContainer>
                                </a>
                                <a
                                    href="https://plany-blond.vercel.app/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconLabelButtons
                                        Color="white"
                                        Variant="outlined"
                                        textTransform="none"
                                    >
                                        Website link
                                    </IconLabelButtons>
                                </a>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    React
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Node.js
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    MongoDB
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Next.js
                                </IconLabelButtons>
                            </div>
                        </div>
                        <div className="fourthProjectContainer">
                            <img src={planyPreview} alt="Plany Preview" />
                            <img
                                src={planyPreviewMobile}
                                alt="Pany preview mobile"
                                className="planyMobile"
                            />
                        </div>
                    </div>
                    <div className="diviser"></div>
                    <div className="fifthProject">
                        <div className="fifthProjectContainer">
                            <video
                                src="/videos/fitlogsVideo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="fitlogsDesktop"
                            />
                            <video
                                src="/videos/fitlogsMobileVideo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="fitlogsMobile"
                            />
                        </div>
                        <div className="fifthProjectSecondContainer">
                            <div className="fifthProjectTextContainer">
                                <div>
                                    <p>
                                        <p>
                                            FitLogs is a fitness logging web application
                                            designed to help users track their workouts
                                            and monitor their progress over time.
                                        </p>
                                        <p>
                                            Users can record all their exercises with
                                            sets, reps and weights, and then visualize
                                            their performance through interactive charts.
                                            The app offers a secure login system using
                                            bcrypt, and also supports Google
                                            authentification for quicker access.
                                        </p>
                                        <p>
                                            The web-app includes several pages such as the
                                            landing page, settings, blog, pricing, FAQ, a
                                            dashboard for entering workout data, and an
                                            analytics page for tracking overall progress.
                                        </p>
                                        <p>
                                            FitLogs is fully deployed on AWS with Docker,
                                            using automation scripts to manage container
                                            startup and environment configuration.
                                        </p>
                                    </p>
                                </div>
                            </div>
                            <div className="projectIconContainer">
                                <a
                                    href="https://github.com/nuuye/fitness-app-logger"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconContainer
                                        background="#383939"
                                        tooltip="See the code"
                                    >
                                        <GitHubIcon sx={{ color: '#2b86ff' }} />
                                    </IconContainer>
                                </a>
                                <a
                                    href="https://fitlogs.fr"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <IconLabelButtons
                                        Color="white"
                                        Variant="outlined"
                                        textTransform="none"
                                    >
                                        Website link (server off)
                                    </IconLabelButtons>
                                </a>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    React
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Node.js
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    MongoDB
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Next.js
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Docker
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    MaterialUI
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    AWS
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Bash
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    CI/CD
                                </IconLabelButtons>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="thirdContainer" id="skillsSection">
                    <span className="skillsTitle">Skills</span>
                    <div className="skillsContainer">
                        <div className="skillsTitleContainer">
                            <div
                                onClick={() => {
                                    setDisplay('0');
                                    setSoftwareBorderRightVisible(false);

                                    setFrontBorderRightVisible(true);

                                    setBackBorderRightVisible(true);

                                    setSecurityBorderRightVisible(true);
                                }}
                                style={{
                                    boxShadow: 'none',
                                    border: softwareBorderRightVisible
                                        ? 'none'
                                        : '2px solid #323030',
                                    borderRight: softwareBorderRightVisible
                                        ? '2px solid #323030'
                                        : 'none',
                                    borderTop: softwareBorderRightVisible
                                        ? 'none'
                                        : '1px solid #323030',
                                }}
                            >
                                Software Development
                            </div>
                            <div
                                onClick={() => {
                                    setDisplay('1');
                                    setSoftwareBorderRightVisible(true);

                                    setFrontBorderRightVisible(false);

                                    setBackBorderRightVisible(true);

                                    setSecurityBorderRightVisible(true);
                                }}
                                style={{
                                    boxShadow: 'none',
                                    border: frontBorderRightVisible
                                        ? 'none'
                                        : '2px solid #323030',
                                    borderRight: frontBorderRightVisible
                                        ? '2px solid #323030'
                                        : 'none',
                                }}
                            >
                                Front-end Web
                            </div>
                            <div
                                onClick={() => {
                                    setDisplay('2');
                                    setSoftwareBorderRightVisible(true);

                                    setFrontBorderRightVisible(true);

                                    setBackBorderRightVisible(false);

                                    setSecurityBorderRightVisible(true);
                                }}
                                style={{
                                    boxShadow: 'none',
                                    border: backBorderRightVisible
                                        ? 'none'
                                        : '2px solid #323030',
                                    borderRight: backBorderRightVisible
                                        ? '2px solid #323030'
                                        : 'none',
                                }}
                            >
                                Back-end Web
                            </div>
                            <div
                                onClick={() => {
                                    setDisplay('3');
                                    setSoftwareBorderRightVisible(true);

                                    setFrontBorderRightVisible(true);

                                    setBackBorderRightVisible(true);

                                    setSecurityBorderRightVisible(false);
                                }}
                                style={{
                                    boxShadow: 'none',
                                    border: securityBorderRightVisible
                                        ? 'none'
                                        : '2px solid #323030',
                                    borderRight: securityBorderRightVisible
                                        ? '2px solid #323030'
                                        : 'none',
                                }}
                            >
                                Cybersecurity tools
                            </div>
                        </div>
                        <div
                            className="SoftwareSkillsContainer"
                            style={{
                                display: display === '0' ? 'flex' : 'none',
                            }}
                        >
                            <div className="iconContainer">
                                <a
                                    href="https://en.wikipedia.org/wiki/C%2B%2B"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={cppPicture} alt="cpp logo" />
                                    <span>C++</span>
                                </a>

                                <a
                                    href="https://en.wikipedia.org/wiki/Java_(programming_language)"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={javaPicture}
                                        alt="java logo"
                                        className="javaLogo"
                                    />
                                    <span>Java</span>
                                </a>

                                <a
                                    href="https://www.python.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={pythonPicture} alt="python logo" />
                                    <span>Python</span>
                                </a>

                                <a
                                    href="https://cmake.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={cmakePicture} alt="cmake logo" />
                                    <span>CMake</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="FrontSkillsContainer"
                            style={{
                                display: display === '1' ? 'flex' : 'none',
                            }}
                        >
                            <div className="iconContainer">
                                <a
                                    href="https://en.wikipedia.org/wiki/HTML"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={htmlPicture} alt="html logo" />
                                    <span>HTML</span>
                                </a>

                                <a
                                    href="https://en.wikipedia.org/wiki/CSS"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={cssPicture}
                                        alt="css logo"
                                        className="cssLogo"
                                    />
                                    <span>CSS</span>
                                </a>

                                <a
                                    href="https://en.wikipedia.org/wiki/JavaScript"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={jsPicture} alt="js logo" />
                                    <span>JavaScript</span>
                                </a>

                                <a
                                    href="https://www.typescriptlang.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={tsPicture} alt="ts logo" />
                                    <span>TypeScript</span>
                                </a>

                                <a
                                    href="https://react.dev/"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ height: '65px' }}
                                >
                                    <img src={reactPicture} alt="react logo" />
                                    <span>React</span>
                                </a>

                                <a
                                    href="https://ant.design/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={antPicture} alt="ant logo" />
                                    <span>Ant Design</span>
                                </a>

                                <a
                                    href="https://mui.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={materialPicture} alt="materialUI logo" />
                                    <span>Material UI</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="BackSkillsContainer"
                            style={{
                                display: display === '2' ? 'flex' : 'none',
                            }}
                        >
                            <div className="iconContainer">
                                <a
                                    href="https://www.mongodb.com/fr-fr"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={mongoDBPicture}
                                        alt="mongodb logo"
                                        className="mongodbLogo"
                                    />
                                    <span>MongoDB</span>
                                </a>
                                <a
                                    href="https://www.postgresql.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={postgrePicture}
                                        alt="postgre logo"
                                        className="postgreLogo"
                                    />
                                    <span>PostgreSQL</span>
                                </a>
                                <a
                                    href="https://www.postman.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={postmanPicture} alt="postman logo" />
                                    <span>Postman</span>
                                </a>
                                <a
                                    href="https://en.wikipedia.org/wiki/Node.js"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={nodejsPicture} alt="nodejs logo" />
                                    <span>NodeJS</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="SecuritySkillsContainer"
                            style={{
                                display: display === '3' ? 'flex' : 'none',
                            }}
                        >
                            <div className="iconContainer">
                                <a
                                    href="https://www.metasploit.com/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={metasploitPicture} alt="metasploit logo" />
                                    <span>Metasploit</span>
                                </a>
                                <a
                                    href="https://nmap.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={nmapPicture} alt="nmap logo" />
                                    <span>Nmap</span>
                                </a>
                                <a
                                    href="https://portswigger.net/burp/documentation/desktop/getting-started"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={burpSuitePicture} alt="burp suite logo" />
                                    <span>Burp Suite</span>
                                </a>

                                <a
                                    href="https://www.kali.org/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={kaliLinuxPicture} alt="kali linux logo" />
                                    <span>Kali Linux</span>
                                </a>
                                <a
                                    href="https://www.kali.org/tools/hydra/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={hydraPicture} alt="hydra logo" />
                                    <span>Hydra</span>
                                </a>
                                <a
                                    href="https://www.openwall.com/john/doc/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={johnTheRipperPicture}
                                        alt="john the ripper logo"
                                    />
                                    <span>John the Ripper</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fourthContainer" id="experienceSection">
                    <span className="ExperienceTitle">Experience</span>
                    <div className="firstExperience">
                        <div className="textImageContainer">
                            <div className="firstExperienceContainer">
                                <img src={projexPicture} alt="ProjexPicture" />
                                <img
                                    src={projexMobile}
                                    alt="ProjexMobilePicture"
                                    className="projexMobile"
                                />
                            </div>
                            <div className="companyContainer">
                                <span className="companyTitle">Groupe Projex</span>
                                <span className="roleTitle">developper intern</span>
                            </div>
                        </div>
                        <div className="firstExperienceExplanation">
                            <div className="firstExperienceText">
                                <p>
                                    I did an internship in an IT center and I was able to
                                    learn HTML, CSS, JavaScript and the basics of React.
                                </p>

                                <p>
                                    One year later, I joined Projex again in order to
                                    master React (along with TypeScript), the NextJS
                                    framework and manipulate databases.
                                </p>
                                <p>
                                    I also familiarized myself with project management
                                    tools such as Jibra or Gitlab.
                                </p>
                            </div>
                            <div className="projectIconContainer">
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                    Color="white"
                                >
                                    1 + 3 months
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    React.js
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    TypeScript
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    SCSS & Ant Design
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Next.js
                                </IconLabelButtons>
                            </div>
                        </div>
                    </div>
                    <div className="diviser"></div>
                    <div className="secondExperience">
                        <div className="secondTextImageContainer">
                            <div className="secondExperienceContainer">
                                <img src={nijiPicture} alt="NijiPicture" />
                                <img
                                    src={nijiMobilePicture}
                                    alt="NijiMobilePicture"
                                    className="nijiMobile"
                                />
                            </div>
                            <div className="companyContainer">
                                <span className="companyTitle">Niji</span>
                                <span className="roleTitle">
                                    Salesforce full-stack developper intern
                                </span>
                            </div>
                        </div>
                        <div className="secondExperienceExplanation">
                            <div className="secondExperienceText">
                                <p>
                                    I gained hands-on experience in developing with Apex
                                    and working within the Salesforce environment.
                                </p>
                                <p>
                                    I developed several custom components using Lightning
                                    Web Components (LWC), created and optimized triggers,
                                    and implemented batch processing.
                                </p>
                                <p>
                                    This experience sharpened my skills in JavaScript,
                                    Apex, and SOQL, allowing me to contribute to the
                                    development of dynamic and efficient Salesforce
                                    applications.
                                </p>
                            </div>
                            <div className="projectIconContainer">
                                <IconLabelButtons
                                    Variant="outlined"
                                    textTransform="none"
                                    Color="white"
                                >
                                    6 months
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Salesforce
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    Apex
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    JavaScript
                                </IconLabelButtons>
                                <IconLabelButtons Variant="outlined" textTransform="none">
                                    SOQL
                                </IconLabelButtons>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fifthContainer" id="contactSection">
                    <span className="contactTitle">Contact</span>
                    <div className="preContactContainer">
                        <div className="contactContainer">
                            <div className="emailContainer">
                                <IconContainer background="#373743" size={45}>
                                    <EmailIcon sx={{ color: '#2b86ff' }} />
                                </IconContainer>
                                <Button variant="text" sx={customPresentationButtonStyle}>
                                    Email <br />
                                    thomassmostowfi@gmail.com
                                </Button>
                            </div>
                            <div className="phoneContainer">
                                <IconContainer background="#373743" size={45}>
                                    <PhoneIcon sx={{ color: '#2b86ff' }} />
                                </IconContainer>
                                <Button variant="text" sx={customPresentationButtonStyle}>
                                    Phone Number <br />
                                    +33(0)7 43 27 40 80
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="endText">
                    <span>
                        © Built by Thomas Mostowfi using React.js, SCSS and Material UI.
                    </span>
                </div>
            </body>
        </div>
    );
}

export default App;
