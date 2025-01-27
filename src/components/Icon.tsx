import React from 'react';

interface IconProps {
    className?: string;
    text: string;
    children: React.ReactNode;
    onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({ className, text, children, onClick }) => {
    return (
        <div className={`relative flex items-center ${className}`} onClick={onClick}>
            <div className="tooltip">
                {children}
                <span className="tooltiptext">{text}</span>
            </div>
        </div>
    );
};

export default Icon;