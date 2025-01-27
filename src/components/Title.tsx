import React from 'react';

interface TitleProps {
    text: string;
    children?: React.ReactNode;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ text, children, className }) => {
    return (
        <div className={className}>
            <h1>{text}</h1>
            {children}
        </div>
    );
};

export default Title;