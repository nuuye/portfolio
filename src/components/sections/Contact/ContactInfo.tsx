import React, { ReactNode, useState } from 'react';
import Button from '@mui/material/Button';
import IconContainer from '../../common/IconContainer/IconContainer';
import './ContactInfo.scss';
import { Tooltip } from '@mui/material';

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
    color: '#b85c2b',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, value }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Tooltip
            PopperProps={{
                sx: {
                    '.MuiTooltip-tooltip': {
                        bgcolor: '#7d3519',
                        fontSize: '12px',
                        padding: '5px 10px',
                    },
                    '.MuiTooltip-arrow': {
                        color: '#7d3519',
                    },
                },
            }}
            className="tooltip"
            slotProps={{
                popper: {
                    modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: [0, -14],
                            },
                        },
                    ],
                },
            }}
            arrow
            title={copied ? 'Copied!' : 'Copy'}
        >
            <div className="contact-info" onClick={() => handleCopy()}>
                <IconContainer background="#ded3c4" size={45}>
                    {icon}
                </IconContainer>
                <Button variant="text" sx={customButtonStyle}>
                    <span>{title}</span>
                    <span>{value}</span>
                </Button>
            </div>
        </Tooltip>
    );
};

export default ContactInfo;
