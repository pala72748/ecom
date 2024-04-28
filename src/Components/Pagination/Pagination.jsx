import React from 'react';
import Button from '../Button/Button';

const Pagination = () => {
    const currentPage = 1; // Current page
    const totalPages = 12; // Total number of pages

    // Generate an array of page numbers from 1 to totalPages
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <>
            <div className='w-[70vw] mx-auto my-6 flex items-center gap-10'>
                <div className='w-2/12'>
                    <Button label={"Previous"} style={"px-10 border border-black"} />
                </div>
                <div className='w-8/12'>
                    <ul className="flex gap-3">
                        {pages.map(page => (
                            <li key={page}>
                                <button className={`px-4 py-2 rounded-full ${currentPage === page ? 'bg-black text-white' : 'bg-white text-black'}`}>
                                    {page}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='w-2/12'>
                    <Button label={"Next"} style={"px-10 border border-black"} />
                </div>
            </div>
        </>
    )
}

export default Pagination;
