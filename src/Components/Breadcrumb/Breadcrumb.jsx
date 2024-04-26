import React from 'react';

const Breadcrumb = ({ label, href }) => {
    return (
        <div className=' border-y'>
            <nav className="flex w-[95vw] mx-auto my-2" aria-label="Breadcrumb">
                <ol className="list-none flex">
                    <li className="flex items-center gap-2">
                        <a href="" className="text-black hover:text-gray-700 text-[14px]">
                            Home /
                        </a>
                        <a href={href} className="text-gray-500 hover:text-gray-700 text-[14px]">
                            {label}
                        </a>
                    </li>
                </ol>
            </nav>
        </div>
    );
};

export default Breadcrumb;
