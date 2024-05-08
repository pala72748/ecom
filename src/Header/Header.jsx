import React from 'react'
import Button from '../Components/Button';
import { Link } from 'react-router-dom';

const Header = () => {
    const nav = [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/blog", name: "Blog" },
        { path: "/product", name: "Product" },
    ]
    return (
        <>
            <div className='container mx-auto my-5 '>
                <div className='flex flex-wrap items-center'>
                    <div className='w-3/12'>
                        <h1 className='text-3xl font-bold cursor-pointer'>Logo</h1>
                    </div>
                    <div className='w-6/12'>
                        <ul className='flex inline gap-8 justify-center cursor-pointer'>
                            {
                                nav.map((item, index) => {
                                    return (
                                        <Link key={index} to={item.path}>
                                            <li>{item.name}</li>
                                        </Link>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className='w-3/12 flex justify-around'>
                        <Button name={"Login"} className={"px-8 py-2 bg-blue-500 text-white rounded"} />
                        <Button name={"sign up"} className={"px-8 py-2 bg-black text-white rounded"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;