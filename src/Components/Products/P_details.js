import React from 'react';
import { Link } from 'react-router-dom';

const P_details = ({ products }) => {

    const { icon, title } = products;
    console.log(icon)




    return (
        <div class="flex justify-center w-full ">


            <div class="rounded-lg shadow-xl hover:bg-[#e1f5fe] shadow-2xl  bg-white  h-40 ">
                <Link to='Category'>
                    <div class="flex justify-center w-100 mt-5 w-40 md:w-44 xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                        <img class="rounded-t-md w-20 h-20 text-center flex" src={icon} alt="" />

                    </div>
                </Link>
                <h2 className='mt-3 text-sm lg:text-[16px]'>{title}</h2>
            </div>

        </div>
    );
};

export default P_details;