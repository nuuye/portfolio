import React, { ReactNode } from 'react';
import './SectionTitle.scss';

interface SectionTitleProps {
    children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return <span className="section-title">{children}</span>;
};

export default SectionTitle;
