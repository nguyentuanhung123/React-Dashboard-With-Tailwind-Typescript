import Table from "../Table"


const OrdersTable = () => {
    return (
        <div className="md:w-[95%] w-[80%] bg-white shadow-sm rounded-xl mt-10 px-5 py-4 mb-8">
            <div className="flex w-full items-center justify-between mb-6">
                <span className="font-bold text-[#20224] text-[24px]"></span>
            </div>
            <Table />
        </div>
    )
}

export default OrdersTable