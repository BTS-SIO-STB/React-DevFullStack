import React from 'react';

interface ElementListProps {
    className?: string;
    Name: string;
    children: React.ReactNode;
    subject: string;
}

const ElementList: React.FC<ElementListProps> = ({ className, children, subject }) => {
    return (
        <div className={`flex items-center ${className}`}>
            <div className="flex-1">
                <p className="text-sm text-gray-600">{subject}</p>
            </div>
            <div className="flex space-x-2 flex-col justify-center content-center">
                {children}
            </div>
        </div>
    );
}

export default ElementList;