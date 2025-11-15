import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';
import IconContainer from '../../common/IconContainer/IconContainer';

interface ContactInfoProps {
    icon: ReactNode;
    title: string;
    value: string;
}

const customButtonStyle = {
    textTransform: 'none',
    whiteSpace: 'normal',
    textAlign: 'left',
    borderRadius: 4,
    lineHeight: 1.4,
    color: '#2b86ff',
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, value }) => {
    return (
        <div className="contact-info">
            <IconContainer background="#373743" size={45}>
                {icon}
            </IconContainer>
            <Button variant="text" sx={customButtonStyle}>
                {title} <br />
                {value}
            </Button>
        </div>
    );
};

export default ContactInfo;
