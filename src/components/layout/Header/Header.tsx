import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import IconLabelButtons from '../../common/IconLabelButton/IconLabelButtons';
import { useScrollVisibility } from '../../../hooks/useScrollVisibility';
import { useSmoothScroll } from '../../../hooks/useSmoothScroll';
import './Header.scss';

const Header: React.FC = () => {
    const isVisible = useScrollVisibility();
    const scrollToSection = useSmoothScroll();

    return (
        <header className={`header ${!isVisible ? 'header--hidden' : ''}`}>
            <button
                className="header__home-button"
                onClick={() => scrollToSection('top')}
            >
                <HomeIcon sx={{ fontSize: 32, color: '#2b86ff' }} />
            </button>
            <nav className="header__nav">
                <IconLabelButtons
                    Variant="text"
                    bold
                    onClick={() => scrollToSection('projectsSection')}
                >
                    Projects
                </IconLabelButtons>
                <IconLabelButtons
                    Variant="text"
                    bold
                    onClick={() => scrollToSection('skillsSection')}
                >
                    Skills
                </IconLabelButtons>
                <IconLabelButtons
                    Variant="text"
                    bold
                    onClick={() => scrollToSection('experienceSection')}
                >
                    Experience
                </IconLabelButtons>
                <IconLabelButtons
                    Icon={<ArrowForwardIosRoundedIcon />}
                    bold
                    onClick={() => scrollToSection('contactSection')}
                >
                    Contact
                </IconLabelButtons>
            </nav>
        </header>
    );
};

export default Header;