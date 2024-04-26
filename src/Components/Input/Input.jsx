import React from 'react'

const Input = ({ style, type, placeholder, name, value }) => {
    return (
        <input className={style} type={type} placeholder={placeholder} name={name} value={value} />
    )
}

export default Input;