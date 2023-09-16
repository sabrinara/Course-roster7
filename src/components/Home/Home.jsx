import { useEffect, useState } from "react";
import Cart from "../Cart/cart";

export default function Home() {
    const [allCourses, setAllCourses] = useState([]);


    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data));
    }, []);

    return (
        <div className="max-w-7xl mx-auto flex gap-3 mt-6 justify-between px-2 pb-10">
            <div className="grid md:grid-cols-3 gap-5">
                {allCourses.map((course) => (

                    <div key={course.id} className='flex flex-wrap card w-[310px] bg-base-100 shadow-2xl '>
                        <div className=" mb-2 ">
                            <img src={course.image} alt="" />
                        </div>
                        <div className="text-left">
                            <h3 className="font-bold mt-2 text-md">{course.title}</h3>
                            <p className="w-full h-20 overflow-hidden">
                                <small>
                                   {course.description}
                                </small>
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-content: space-evenly gap-1 mt-1 mb-2">
                            <p ><i className="fa-solid fa-dollar-sign"></i> Price : {course.price}$</p>
                            <p className="ml-4"><i className="fa-solid fa-book-open"></i> Credit:{course.credit}hr</p>
                        </div>
                        <div>
                            <button className="rounded-lg text-white text-center px-24 mt-1 bg-blue-700  btn">Select</button>
                        </div>
                    </div>            
                )
                )
                }
            </div>
            <div className="cart">
                <Cart></Cart>
            </div>
        </div>
    )
}