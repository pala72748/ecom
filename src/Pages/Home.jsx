import React from 'react';
import Header from '../Components/Header/Header';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import Sidebar from '../Components/Sidebar/Sidebar';
import Pagination from '../Components/Pagination/Pagination';


export const Home = () => {
    return (
        <>
            <Header />
            <Breadcrumb label={"All European Brand"} href={"/home"} />
            <div className='container mx-auto flex'>
                <div className='w-3/12'>
                    <Sidebar />
                </div>
                <div className='w-9/12 mt-8'>
                    <h2 className='text-2xl'>All European brands</h2>
                    <p>Shop independent brands from around the world at wholesale prices.</p>
                </div>
            </div>
            <div className='border-y'>
                <Pagination />
            </div>
        </>
    )
}
