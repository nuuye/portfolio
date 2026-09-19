import React from 'react';
import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import ContactInfo from './ContactInfo';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import './Contact.scss';

const Contact: React.FC = () => {
    return (
        <div className="contact" id="contactSection">
            <SectionTitle>Contact</SectionTitle>

            <div className="contact__wrapper">
                <div className="contact__container">
                    <ContactInfo
                        icon={<EmailIcon sx={{ color: '#9ec5f8' }} />}
                        title="Email"
                        value="thomassmostowfi@gmail.com"
                    />
                    <ContactInfo
                        icon={<PhoneIcon sx={{ color: '#9ec5f8' }} />}
                        title="Phone Number"
                        value="+33(0)7 43 50 96 00"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
