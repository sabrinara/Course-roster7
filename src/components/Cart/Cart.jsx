export default function Cart(){
    return (
        <div className="card bg-base-100 shadow-2xl w-[220px]">
            <div className="text-blue-700 font-bold ">
                <h5>Credit Hour Remaining: </h5>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2"></div>
            <div className="">
                <h2 className="font-bold text-xl text-left">Course Name</h2>
                <ol type="1" className="text-gray-400 text-left">
                    <li>ghgchafsj</li>
                </ol>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2"></div>
            <div className="text-gray-500 font-semibold text-lg text-left">
                <h1>Total Credit Hour:</h1>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2"></div>
            <div className="text-gray-700 font-semibold text-lg text-left">
                <h1>Total Price:USD</h1>
            </div>
        </div>
    )
}