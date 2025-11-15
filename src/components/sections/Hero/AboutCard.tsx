import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import IconContainer from '../../common/IconContainer/IconContainer';
import SchoolIcon from '@mui/icons-material/School';
import InterestsIcon from '@mui/icons-material/Interests';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import ArticleIcon from '@mui/icons-material/Article';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import './AboutCard.scss';

const AboutCard: React.FC = () => {
    return (
        <div className="about-card">
            <div>
                <span className="about-card__header">About me</span>
            </div>

            <div className="about-card__presentation">
                <p>
                    👋 Hello, I'm Thomas Mostowfi. I recently graduated from Polytech
                    Paris-Saclay with a degree in computer science.
                </p>
                <p>
                    I am now actively seeking new opportunities, with a strong interest in
                    development and cybersecurity. My background in web development and
                    recent experience in software development provide a solid foundation,
                    and I'm eager to apply my skills to real world challenges.
                </p>
                <p>
                    If you have a role or project that aligns with my skills and
                    ambitions, I'd love to connect and explore how I can make a positive
                    impact.
                </p>
            </div>

            <div className="about-card__background">
                <div className="about-card__section">
                    <div className="about-card__section-title">
                        <IconContainer background="#373743">
                            <SchoolIcon color="primary" />
                        </IconContainer>
                        <span>Education (Graduated in 2024)</span>
                    </div>
                    <div className="about-card__list">
                        <List dense={true} sx={{ paddingTop: 0 }}>
                            <ListItem divider>
                                <ListItemIcon>
                                    <FiberManualRecordIcon
                                        fontSize="small"
                                        sx={{ color: '#ffffffad' }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{ color: '#ffffffad' }}
                                    secondaryTypographyProps={{ color: '#ffffff67' }}
                                    primary="Sapienza Università di Roma, Rome, Italie"
                                    secondary="I went to La Sapienza for 6 months to study computer science."
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
                                    primaryTypographyProps={{ color: '#ffffffad' }}
                                    secondaryTypographyProps={{ color: '#ffffff67' }}
                                    primary="Polytech Paris-Saclay, Orsay, Paris"
                                    secondary="I chose the Computer Science specialty and I aim to work in the field of programming or cyber-security."
                                />
                            </ListItem>
                        </List>
                    </div>
                </div>

                <div className="about-card__section">
                    <div className="about-card__section-title">
                        <IconContainer background="#373743">
                            <InterestsIcon sx={{ color: '#2b86ff' }} />
                        </IconContainer>
                        <span>Interest</span>
                    </div>
                    <div className="about-card__list">
                        <List dense={true} sx={{ paddingTop: 0 }}>
                            <ListItem divider>
                                <ListItemIcon>
                                    <FitnessCenterIcon
                                        fontSize="small"
                                        sx={{ color: '#ffffffad' }}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{ color: '#ffffffad' }}
                                    secondaryTypographyProps={{ color: '#ffffff67' }}
                                    primary="Sports"
                                    secondary="Tennis, gym"
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
                                    primaryTypographyProps={{ color: '#ffffffad' }}
                                    secondaryTypographyProps={{ color: '#ffffff67' }}
                                    primary="Trading"
                                    secondary=""
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
                                    primaryTypographyProps={{ color: '#ffffffad' }}
                                    secondaryTypographyProps={{ color: '#ffffff67' }}
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
                                    primaryTypographyProps={{ color: '#ffffffad' }}
                                    secondaryTypographyProps={{ color: '#ffffff67' }}
                                    primary="Cybersecurity"
                                />
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;
