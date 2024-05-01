/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from "react"
import DataTable from "react-data-table-component"


const Table = () => {

    const [search, setSearch] = useState<any>("")

    const [filteredData, setFilteredData] = useState<any[]>([])

    const columns = [
        {
            name: "Product Name",
            selector: (row: any) => row.productName, sortable: true
        },
        {
            name: "Location",
            selector: (row: any) => row.location, sortable: true
        },
        {
            name: "Date",
            selector: (row: any) => row.date, sortable: true
        },
        {
            name: "Quantity",
            selector: (row: any) => row.quantity, sortable: true
        },
        {
            name: "Total Price",
            selector: (row: any) => row.totalPrice, sortable: true
        },
        {
            name: "Status",
            selector: (row: any) => row.status, sortable: true
        },
        {
            name: "Action",
            cell: (row: any) => (
                <button 
                    className="bg-[#1d6a37] px-2.5 py-2.5 rounded-full" 
                    onClick={() => alert(row.id)}
                >
                    Edit
                </button>
            )
        }
    ]

    const data = [
        {
            id: 1,
            productName: "Apple watch 3 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">Deliverd</div>
        },
        {
            id: 2,
            productName: "Iphone 12 Pro",
            location: "8093 BC,Vancouver",
            date: "05.06.2024",
            quantity: "1",
            totalPrice: "$735",
            status: <div className="bg-[#E9B434] rounded-full px-3 py-1 text-white">Pending</div>
        },
        {
            id: 3,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 4,
            productName: "Apple watch 3 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">Deliverd</div>
        },
        {
            id: 5,
            productName: "Iphone 12 Pro",
            location: "8093 BC,Vancouver",
            date: "05.06.2024",
            quantity: "1",
            totalPrice: "$735",
            status: <div className="bg-[#E9B434] rounded-full px-3 py-1 text-white">Pending</div>
        },
        {
            id: 6,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 7,
            productName: "Apple watch 3 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">Deliverd</div>
        },
        {
            id: 8,
            productName: "Iphone 12 Pro",
            location: "8093 BC,Vancouver",
            date: "05.06.2024",
            quantity: "1",
            totalPrice: "$735",
            status: <div className="bg-[#E9B434] rounded-full px-3 py-1 text-white">Pending</div>
        },
        {
            id: 9,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 10,
            productName: "Apple watch 3 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#00B69B] rounded-full px-3 py-1 text-white">Deliverd</div>
        },
        {
            id: 11,
            productName: "Iphone 12 Pro",
            location: "8093 BC,Vancouver",
            date: "05.06.2024",
            quantity: "1",
            totalPrice: "$735",
            status: <div className="bg-[#E9B434] rounded-full px-3 py-1 text-white">Pending</div>
        },
        {
            id: 12,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 13,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 14,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 15,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 16,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 17,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 18,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 19,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 20,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 21,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 22,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 23,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 24,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 25,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 26,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 27,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 28,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 29,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 30,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 31,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 32,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
        {
            id: 33,
            productName: "Apple watch 4 series",
            location: "6096 Marjolaine Langding",
            date: "12.09.2024",
            quantity: "1",
            totalPrice: "$896",
            status: <div className="bg-[#F93C65] rounded-full px-3 py-1 text-white">Canceled</div>
        },
    ]

    useEffect(() => {
        const result = data.filter(dataItem => {
            return dataItem.productName.toLowerCase().match(search.toLowerCase())
        });
        setFilteredData(result)
    }, [search])

    return (
        <DataTable
            columns = {columns}
            // data = {data}
            data = {filteredData}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="450px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            actions= {
                <button className="bg-[#eb3939] rounded-full px-3 py-1">Export pdf</button>
            }
            subHeader
            subHeaderComponent={
                <input 
                    type="text" 
                    placeholder="Search here" 
                    className="w-25 px-[20px] py-[12px] mx-0 my-8 inline-block border border-solid border-[#ccc] rounded-sm box-border"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            }
            subHeaderAlign="center"
            paginationPerPage={3}
            paginationRowsPerPageOptions={[5,10,15]}
        />
    )
}

export default Table