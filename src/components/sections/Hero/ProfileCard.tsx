import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import IconContainer from '../../common/IconContainer/IconContainer';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TranslateIcon from '@mui/icons-material/Translate';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import photo from '../../../images/photo3.png';
import './ProfileCard.scss';

const customButtonStyle = {
    textTransform: 'none',
    whiteSpace: 'normal',
    textAlign: 'left',
    borderRadius: 4,
    lineHeight: 1.4,
    color: '#2b86ff',
};

const ProfileCard: React.FC = () => {
    return (
        <div className="profile-card">
            <div className="profile-card__photo">
                <div className="profile-card__photo-wrapper">
                    <Avatar alt="Thomas" src={photo} sx={{ width: 175, height: 175 }} />
                </div>
            </div>

            <div className="profile-card__info">
                <span>Thomas Mostowfi</span>
                <span>Computer science engineer</span>
                <span>25 years old</span>
            </div>

            <div className="profile-card__details">
                <div className="profile-card__details-grid">
                    <div>
                        <div className="profile-card__detail-item">
                            <IconContainer background="#373743">
                                <ConnectWithoutContactIcon sx={{ color: '#2b86ff' }} />
                            </IconContainer>
                            <Button variant="text" sx={customButtonStyle}>
                                <span>Socials skills</span>
                                <span>Sociable, dedicated and rigorous</span>
                            </Button>
                        </div>
                        <div className="profile-card__detail-item">
                            <IconContainer background="#373743">
                                <TranslateIcon sx={{ color: '#2b86ff' }} />
                            </IconContainer>
                            <Button variant="text" sx={customButtonStyle}>
                                <span>Languages</span>
                                <span>English (toeic 830 ≈ B2), French (fluent)</span>
                            </Button>
                        </div>
                    </div>
                    <div>
                        <a
                            href="https://github.com/nuuye"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="profile-card__detail-item">
                                <IconContainer background="#373743">
                                    <GitHubIcon sx={{ color: '#2b86ff' }} />
                                </IconContainer>
                                <Button variant="text" sx={customButtonStyle}>
                                    <span>GitHub</span>
                                    <span>https://github.com/nuuye</span>
                                </Button>
                            </div>
                        </a>
                        <a
                            href="https://maps.app.goo.gl/s1pbAcgi2kahd5mQ7"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="profile-card__detail-item">
                                <IconContainer background="#373743">
                                    <LocationOnIcon sx={{ color: '#2b86ff' }} />
                                </IconContainer>
                                <Button variant="text" sx={customButtonStyle}>
                                    <span>Location</span>
                                    <span>Paris - France</span>
                                </Button>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
