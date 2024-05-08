import React from 'react'
import Helmet from 'react-helmet';

const Title = ({ name }) => {
    return (
        <Helmet>
            <title>{name} | Themeglobe</title>
        </Helmet>
    )
}

export default Title;