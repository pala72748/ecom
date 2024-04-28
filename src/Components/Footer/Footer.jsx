import React from 'react'
import { Img } from '../Img/Img';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='border-y'>
                    <div className='container mx-auto h-48 my-12'>
                        <div className='flex justify-between'>
                            <div className='w-4/12 flex'>
                                <div className='w-36'>
                                    <h5 className='font-bold my-3'>Company</h5>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Newsroom</li>
                                        <li>Career</li>
                                    </ul>
                                </div>
                                <div className='w-36 '>
                                    <h5 className='font-bold my-3'>Support</h5>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Newsroom</li>
                                        <li>Career</li>
                                    </ul>
                                </div>
                                <div className='w-36 '>
                                    <h5 className='font-bold my-3'>Connect</h5>
                                    <ul>
                                        <li>About Us</li>
                                        <li>Newsroom</li>
                                        <li>Career</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='w-3/12 my-3'>
                                <h2 className='text-3xl font-thin mb-2'>Get the Faire app</h2>
                                <p>Shop on the go, message brands, and track orders with the Faire app.</p>
                                <div className='gap-3 flex'>
                                    <Img style={""} src={"https://cdn.faire.com/static/download-badges/app-store-en.svg"} />
                                    <Img style={"w-36"} src={"https://cdn.faire.com/static/download-badges/google-play-en.png"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='border-y'>
                    <div className='container mx-auto my-12'>
                        <div className='flex justify-between'>
                            <div className='w-4/12 flex'>
                                <p>©2024 Faire Wholesale, Inc.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;