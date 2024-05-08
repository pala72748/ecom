import React from 'react';
import Button from './Button';

const Table = ({ data, onClick, filter }) => {
    if(!data || data.length === 0){
        return <div>No data available</div>
    }
    const keys = Object.keys(data[0]).filter(key => filter.includes(key));
    console.log(keys);
    return (
        <div className="relative overflow-x-auto">
            <table className="container items-center mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {keys.map((key) => (
                            <th key={key} scope="col" className="px-6 py-3">
                                {key}
                            </th>
                        ))}
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((abhi, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            {keys.map((key, index) => (
                                <td key={index} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {key === 'imageUrl' ? <img src={abhi[key]} alt="Image" srcset="" /> : abhi[key]}
                                </td>
                            ))}
                            <td>
                                <Button name={"Edit"} onClick={() => onClick(abhi)} className={"px-5 py-2 bg-green-500 text-white"} />
                            </td>
                            <td>
                                <Button name={"Delete"} onClick={() => onClick(abhi.id)} className={"px-5 py-2 bg-red-500 text-white"} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
