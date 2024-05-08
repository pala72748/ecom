import React from 'react'

const DataTable = ({ data, filter }) => {

    if (!data || data.length === 0) {
        return <div>No data available</div>
    }

    const user = Object.keys(data[0]).filter(key => filter.includes(key));
    console.log(user);
    return (
        <div class="relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            user.map((key) => (
                                <th key={key} scope="col" class="px-6 py-3">
                                    {key}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item, rowIndex) => {
                            return (
                                <tr key={rowIndex} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    {
                                        user.map((key, index) => (
                                            <td key={index} class="px-6 py-4">
                                                {key === 'imageUrl' ? <img src={item[key]} style={{ width: 40 }} /> : item[key]}

                                            </td>
                                        ))
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}

export default DataTable;