import React from 'react'

export const Img = ({ src, style, alt }) => {
    return (
        <img className={style} src={src} alt={alt} />

    )
}
