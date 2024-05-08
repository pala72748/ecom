import React from 'react'

const Input = ({ label, className, type, name, placeholder, value, onChange }) => {
    return (
        <>
            <label htmlFor={label}>{label}</label>
            <input
                onChange={onChange}
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                required
            />
        </>
    )
}

export default Input;