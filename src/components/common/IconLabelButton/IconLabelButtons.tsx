import * as React from 'react';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';
import './IconLabelButtons.scss';

interface IconLabelButtonsProps {
    children?: string | ReactNode;
    Color?: string;
    Icon?: ReactNode;
    StartIcon?: boolean;
    Variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'large';
    bold?: boolean;
    textTransform?: 'uppercase' | 'none' | 'lowercase';
    onClick?: () => void;
    className?: string;
}

export default function IconLabelButtons(props: IconLabelButtonsProps) {
    const {
        children,
        Icon,
        Color,
        Variant,
        StartIcon,
        size,
        bold,
        textTransform,
        onClick,
        className,
    } = props;
    return (
        <div>
            <Button
                className={className}
                variant={Variant ? Variant : 'outlined'}
                startIcon={StartIcon ? Icon : undefined}
                endIcon={!StartIcon ? Icon : undefined}
                sx={{
                    borderRadius: 4,
                    textTransform: textTransform,
                    color: Color ? Color : '#2b86ff',
                    borderColor: Color ? Color : '#2b86ff',
                    fontWeight: bold ? 'bold' : 'normal',
                }}
                size={size ? size : 'small'}
                onClick={onClick}
            >
                {children ? children : undefined}
            </Button>
        </div>
    );
}
