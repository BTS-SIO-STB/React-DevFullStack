import React from 'react';

interface ListProps {
    className?: string;
    children: React.ReactNode;
    subject: string;
}

const List: React.FC<ListProps> = ({ className, children, subject }) => {
    return (
        <div className={className}>
            <h2 className="text-xl font-semibold mb-2 border-b-2">{subject}</h2>
            <ul>
                {children}
            </ul>
        </div>
    );
}

export default List;