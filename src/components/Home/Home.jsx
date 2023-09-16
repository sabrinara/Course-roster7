import Cart from "../Cart/cart";

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto flex gap-5 justify-between px-2 pb-10">
            <div className="grid md:grid-cols-3">
                 <div className='flex flex-wrap  product-item product card w-[320px] bg-base-100 shadow-2xl '>
                <div className="text-left mb-2 ">
                    <img src="https://i.ibb.co/Drj16Ck/Rectangle-2-2.png" alt="" />
                </div>
                <div className="text-left">
                    <h3 className="font-bold">Introduction to C Programming</h3>
                    <p>
                        <small>
                        C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old.
                        </small>
                    </p>
                </div>
                <div className="flex flex-wrap justify-content: space-evenly gap-6 mt-2 mb-2">
                    <p ><i class="fa-solid fa-dollar-sign"></i> Price : 15000</p>
                    <p className="ml-4"><i class="fa-solid fa-book-open"></i> Credit: 1hr</p>
                </div>
                <div>
                <button className="rounded-lg text-white text-center px-16   bg-blue-700  btn">Select</button>
                </div>
            </div>
            </div>
                <div className="cart">
                    <Cart></Cart>
                </div> 
        </div>
    )
}