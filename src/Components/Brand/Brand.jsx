import React from 'react'
import { Img } from '../Img/Img';

const Brand = () => {
    const brand = [
        {
            img: "https://cdn.faire.com/fastly/4e1184f7c9c7a3da4c682abafdd856d7f824b5788b47617914a1d1fd358019f9.jpeg?dpr=1&fit=crop&format=jpg&height=450&width=360",
            imgname: "Shop home decor",
        },
        {
            img: "https://cdn.faire.com/fastly/673e3e2396ebe861807a27891f1354e5993cbe9e9d473cd8e0e31a5b9677c8cb.jpeg?dpr=1&fit=crop&format=jpg&height=450&width=360",
            imgname: "Brands not on Amazon",
        },
        {
            img: "https://cdn.faire.com/fastly/15cf08198a86dba2e5f9a0ad13729203d5cdfb14d19f3440bda5b045c0c5ef46.jpeg?dpr=1&fit=crop&format=jpg&height=450&width=360",
            imgname: "Shop women",
        },
    ]
    return (
        <>
            <div className='text-center text-3xl my-8 font-thin'>
                <div>
                    <h1>Keep exploring</h1>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className='flex'>
                    {
                        brand.map((item, index) => {
                            return (
                                <div key={index} className='w-4/12'>
                                    <Img style={"mx-auto"} src={item.img} />
                                    <p className='text-center my-3 underline'>{item.imgname}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Brand;