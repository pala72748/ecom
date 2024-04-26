import React from 'react'
import { Img } from '../Img/Img';
import logo from '../../assets/logo.svg';
import Input from '../Input/Input';
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import Button from '../Button/Button';

const Header = () => {
    const Nav = [
        { menu: "Featured" },
        { menu: "New" },
        { menu: "Home decor" },
        { menu: "Food & Drink" },
        { menu: "Women" },
        { menu: "Beauty & Wellness" },
        { menu: "Jewelry" },
        { menu: "Paper & Novelty" },
        { menu: "Kids & Baby" },
        { menu: "Pets" },
        { menu: "Men" },

    ]
    return (
        <>
            <div className='text-center py-4 bg-[#fbf8f6] text-[14px]'>
                Shop wholesale online from over 1,00,000 brands. <a className='underline' href="">Sign up</a>
            </div>
            <div className='w-[94vw] mx-auto flex justify-between w-full h-12 items-center mt-3'>
                <div className='flex w-7/12 gap-3'>
                    <div className='flex gap-5 relative w-full'>
                        <Img src={logo} alt={"logo"} style={"w-100"} />
                        <Input type={"text"} placeholder={"Search product or Brands"} style={"text-[16px] w-full py-2 px-6 border rounded-full border-black min-w-96 "} />
                        <IoSearchOutline className=" absolute right-5 top-2" size={24} />
                    </div>
                </div>
                <div className='flex gap-3 items-center text-[14px]'>
                    <AiOutlineGlobal size={24} />
                    <h4 className='border-r pr-3 border-black'>EN-US</h4>
                    <h4>Blog</h4>
                    <h4>Sell On Faire</h4>
                    <h4>Sign In</h4>
                    <Button label={"Shop Up to Shop"} style={"bg-black text-white text-[14px] px-4 py-2"} />
                </div>
            </div>
            <div>
                <div className='text-center my-3'>
                    <ul>
                        {
                            Nav.map((item, index) => {
                                return (
                                    <li className='inline mx-2 hover:underline cursor-pointer text-[14px]' key={index}>{item.menu}</li>
                                )
                            })
                        }

                    </ul>
                </div>
            </div>

        </>
    )
}

export default Header;
