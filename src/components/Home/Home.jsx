import { useEffect, useState } from "react";
import Cart from "../Cart/cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [allCourses, setAllCourses] = useState([]);
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [totalHour, setTotalHour] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        fetch("./data.json")
            .then((res) => res.json())
            .then((data) => setAllCourses(data));
    }, []);

    const handleSelectCourse = (course) => {
        const isExist = selectedCourses.find((item) => item.id == course.id);
        let hour = course.credit;
        let price = course.price;

        if (isExist) {
          return toast("Already Selected");
        }
        else {
          selectedCourses.forEach(item => {
            hour += item.credit;
            price +=item.price;
          });
    
          const remaining = 20 - hour;
    
          if (hour > 20) {
            return toast("No more credit!!");
          }
          else {
            
            setRemaining(remaining);
            setTotalHour(hour);
            setTotalPrice(price);
            setSelectedCourses([...selectedCourses, course]);
          }
    
        }
    
      };

    return (
        <>
       
        <div className="w-[100%] mx-auto flex gap-3 mt-6 justify-between px-2 pb-10">
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
                            <button className="rounded-lg text-white text-center px-24 mt-1 bg-blue-700  btn" onClick={() => handleSelectCourse(course)} >Select</button>
                        </div>
                    </div>            
                )
                )
                }
            </div>
            <div className="cart">
                <Cart selectedCourses = {selectedCourses}
                remaining = {remaining}
                totalHour = {totalHour}
                totalPrice = {totalPrice}
                ></Cart>
            </div>
           
        </div>  <ToastContainer />
        </>
    )
}