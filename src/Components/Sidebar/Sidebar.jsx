import React from 'react'

const Sidebar = () => {
    const Brands = [
        { name: "Novelty Gift" },
        { name: "Active Bear" },
        { name: "Mother Day's" },
        { name: "Summer Styles" },
        { name: "Spring Styles" },
        { name: "Gift for kids" },
        { name: "Self care" },
        { name: "for the foodie" },
        { name: "Based in France" },
        { name: "Based in Germany" },
        { name: "Everyday Jewelry" },

    ]
    return (
        <>
            <div>
                <div className='my-3'>
                    <h2>Trending Collections</h2>
                    <p className='underline my-3'>All European Brands</p>
                    <div>
                        <ul>
                            {
                                Brands.map((item, index) => {
                                    return (
                                        <li key={index} className='my-2 text-[14px]'>{item.name}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;