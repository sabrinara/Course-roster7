/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const Cart = ({ selectedCourses, remaining, totalHour, totalPrice }) => {
    console.log(selectedCourses);
    return (
        <div className="card bg-base-100 shadow-2xl w-[220px]">
            <div className="text-blue-700 font-bold text-left ">
                <h5>Credit Hour Remaining:{remaining} hr</h5>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2"></div>
            <div className="">
                <h2 className="font-bold text-xl text-left">Course Name</h2>
                <div className="text-gray-400 text-left">
                    <ol type="1">
                        {selectedCourses.map((course) => (
                            <li key={course.id}>{course.title}</li>
                        ))}
                    </ol>
                </div>

            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2"></div>
            <div className="text-gray-500 font-semibold text-md text-left">
                <h3>Total Credit Hour: {totalHour} hr</h3>
            </div>
            <div className="w-full h-[1px] bg-gray-200 my-2"></div>
            <div className="text-gray-700 font-semibold text-md text-left">
                <h3>Total Price: {totalPrice} USD</h3>
            </div>
        </div>
    );

};

export default Cart;
