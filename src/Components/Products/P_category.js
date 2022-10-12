import React from 'react';
import baby_m from '../../Assets/Icons/baby_milk.png';
import energy from '../../Assets/Icons/energy-booster.png';
import diapers from '../../Assets/Icons/diapers.png';
import cooking from '../../Assets/Icons/cooking.png';
import skincare from '../../Assets/Icons/skincare.jpg';
import feeders from '../../Assets/Icons/feeders.jpg';
import b_accessories from '../../Assets/Icons/baby_accessories.jpg';
import toys from '../../Assets/Icons/toys.jpg';
import dolls from '../../Assets/Icons/dolls.jpg';
import ditergent from '../../Assets/Icons/baby_washing.jpg';
import baby_banner from '../../Assets/Icons/baby_banner.jpg';

import { Link } from 'react-router-dom';
const P_category = () => {
    return (
        <div>

            <img src={baby_banner} alt="" />

            <h2 className=' mt-3 mb-3 text-sm lg:text-xl text-shadow lg:mt-5 lg:mb-5 font-bold'>Find your items from wide range of product categories</h2>


            <div class="grid ml-3 mr-3 lg:ml-10 lg:mr-10 grid-cols-2 lg:grid-cols-6 gap-2">

                <div class="flex justify-center w-full hover:scale-105 duration-1000'">
                    <div class="rounded-lg shadow-xl  shadow-2xl  bg-white  h-48 ">
                        <Link to='Category'>
                            <div class="flex justify-center w-100 mt-5 w-40 md:w-44 xl:w-48 lg:w-48 ">

                                <img class="rounded-t-md w-30 h-24 text-center flex" src={energy} alt="" />

                            </div>
                        </Link>
                        <h2 className='mt-3 text-sm lg:text-[16px] font-bold p-2'>Formula & Energy Boosters</h2>
                    </div>

                </div>


                <div class="flex justify-center w-100 hover:scale-105 duration-1000'">
                    <div class="rounded-lg shadow-xl  bg-white w-100 h-48">
                        <div class="flex justify-center w-100 mt-5 w-40 md:w-44  xl:w-48 lg:w-48 ">
                            <a href="#!">
                                <img class="rounded-t-md w-30 h-24 text-center flex" src={baby_m} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px] font-bold p-2'>Baby Milk & Foods</h2>


                    </div>
                </div>

                <div class="flex justify-center w-100 hover:scale-105 duration-1000'">
                    <div class="rounded-lg shadow-xl  bg-white w-100 h-48">
                        <div class="flex justify-center w-100 mt-5 w-40 md:w-44  xl:w-48 lg:w-48 ">
                            <a href="#!">
                                <img class="rounded-t-md w-30 h-24 text-center flex" src={diapers} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px] font-bold p-2'>Diapers</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100 hover:scale-105 duration-1000'">
                    <div class="rounded-lg shadow-xl  bg-white w-100 h-48">
                        <div class="flex justify-center w-100 mt-5 w-40 md:w-44  xl:w-48 lg:w-48 ">
                            <a href="#!">
                                <img class="rounded-t-md w-30 h-24 text-center flex" src={skincare} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px] font-bold p-2'>Bath & Skincare</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100 hover:scale-105 duration-1000'">
                    <div class="rounded-lg shadow-xl  bg-white w-100 h-48">
                        <div class="flex justify-center w-100 mt-5 w-40 md:w-44  xl:w-48 lg:w-48 ">
                            <a href="#!">
                                <img class="rounded-t-md w-30 h-24 text-center flex" src={feeders} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px] font-bold p-2'>Feeders</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100 hover:scale-105 duration-1000'">
                    <div class="rounded-lg shadow-xl  bg-white w-100 h-48">
                        <div class="flex justify-center w-100 mt-5 w-40 md:w-44  xl:w-48 lg:w-48 ">
                            <a href="#!">
                                <img class="rounded-t-md w-30 h-24 text-center flex" src={b_accessories} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px] font-bold p-2'>Baby Accessories</h2>


                    </div>
                </div>

            </div>
            <div class="grid mt-4 ml-3 mr-3 lg:ml-10 lg:mr-10 grid-cols-2 lg:grid-cols-6 gap-2">

                <div class="flex justify-center w-100 hover:scale-105 duration-1000'">
                    <div class="rounded-lg shadow-xl  bg-white w-100 h-48">
                        <div class="flex justify-center w-100 mt-5 w-40 md:w-44  xl:w-48 lg:w-48 ">
                            <a href="#!">
                                <img class="rounded-t-md w-30 h-24 text-center flex" src={toys} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px] font-bold p-2'>Toys, Gaming & Furniture</h2>


                    </div>
                </div>

                <div class="flex justify-center w-100 hover:scale-105 duration-1000'">
                    <div class="rounded-lg shadow-xl  bg-white w-100 h-48">
                        <div class="flex justify-center w-100 mt-5 w-40 md:w-44  xl:w-48 lg:w-48 ">
                            <a href="#!">
                                <img class="rounded-t-md w-30 h-24 text-center flex" src={dolls} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px] font-bold p-2'>Dolls</h2>


                    </div>
                </div>

                <div class="flex justify-center w-100 hover:scale-105 duration-1000'">
                    <div class="rounded-lg shadow-xl  bg-white w-100 h-48">
                        <div class="flex justify-center w-100 mt-5 w-40 md:w-44  xl:w-48 lg:w-48 ">
                            <a href="#!">
                                <img class="rounded-t-md w-30 h-24 text-center flex" src={ditergent} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px] font-bold p-2'>Baby Washing Ditergents</h2>


                    </div>
                </div>


            </div>
        </div>
    );
};

export default P_category;