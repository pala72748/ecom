import React from 'react';

const Button = ({ className, name, onClick , onChange }) => {
    return (
        <button onClick={onClick} onChange={onChange} className={className}>{name}</button>
    );
};

export default Button;
