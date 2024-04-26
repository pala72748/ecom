import React from 'react';
import Header from '../Components/Header/Header';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import Sidebar from '../Components/Sidebar/Sidebar';


export const Home = () => {
    return (
        <>
            <Header />
            <Breadcrumb label={"All European Brand"} href={"/home"} />
            <div className='container mx-auto flex'>
                <div className='w-3/12 border'>
                    <Sidebar />
                </div>
                <div>
                    <h2 cl>All European brands</h2>
                </div>
            </div>
        </>
    )
}
