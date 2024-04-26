import React from 'react'

const Button = ({ label, style }) => {
    return (
        <button className={style}>{label}</button>
    )
}

export default Button;