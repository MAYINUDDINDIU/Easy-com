import React from 'react';
import baby from '../../Assets/Icons/playtime.png';
import cooking from '../../Assets/Icons/cooking.png';
import fruits from '../../Assets/Icons/fruit.png';
import drinks from '../../Assets/Icons/soft-drink.png';
import home_care from '../../Assets/Icons/cleaning.png';
import beauty_baby from '../../Assets/Icons/shampoo.png';
import health_care from '../../Assets/Icons/aid-kit.png';
import milk from '../../Assets/Icons/dairy.png';
import snaks from '../../Assets/Icons/snack.png';
import office from '../../Assets/Icons/stationery.png';
import kitchen from '../../Assets/Icons/kitchen.png';
import car from '../../Assets/Icons/hybrid-car.png';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia } from '@mui/material';

const Product = () => {





    return (
        <div>
            <h2 className=' mt-3 mb-3 text-sm lg:text-xl text-shadow lg:mt-5 lg:mb-5 font-bold'>Find your items from wide range of product categories</h2>


            <div class="grid ml-3 mr-3 lg:ml-10 lg:mr-10 grid-cols-2 lg:grid-cols-6 gap-2">

                <div class="flex justify-center w-full ">

                    <div className='mt-2 text-center'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia className='h-36'
                                component="img"
                                height="140"
                                image={baby}
                                alt="green iguana"
                            />
                            <CardContent>

                                {/* <h6>{title}</h6>
                    <p>{price}</p> */}
                                <Button variant="contained" color="success">Buy Now</Button>


                            </CardContent>

                        </Card>
                    </div>

                    {/* 
                    <div class="rounded-lg shadow-xl hover:bg-[#e1f5fe] shadow-2xl  bg-white  h-40 ">
                        <Link to='Category'>
                            <div class="flex justify-center w-100 mt-5 w-40 md:w-44 xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={baby} alt="" />

                            </div>
                        </Link>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Baby Care</h2>
                    </div> */}

                </div>


                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl hover:bg-[#e1f5fe] bg-white w-100 h-40">
                        <div class="flex justify-center w-100 mt-5 w-40 md:w-44  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={cooking} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Kitchen and Cooking</h2>


                    </div>
                </div>

                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={fruits} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Fruits & Vagetables</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={drinks} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Drinks & Beverage</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={home_care} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Home Care & Cleaning</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={beauty_baby} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Beauty & Body Care</h2>


                    </div>
                </div>

            </div>
            <div class="grid mt-4 ml-3 mr-3 lg:ml-10 lg:mr-10 grid-cols-2 lg:grid-cols-6 gap-2">

                <div class="flex justify-center w-full ">
                    <div class="rounded-lg shadow-xl hover:bg-[#e1f5fe] shadow-2xl  bg-white w-100 h-40 ">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={health_care} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Health & Adult Care</h2>


                    </div>
                </div>


                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl hover:bg-[#e1f5fe] bg-white w-100 h-40">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={milk} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Milk & Dairy</h2>


                    </div>
                </div>

                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={snaks} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Snacks & Spread</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={office} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Office & Schooling</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-36 lg:h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={kitchen} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Kitchen Appliance</h2>


                    </div>
                </div>
                <div class="flex justify-center w-100">
                    <div class="rounded-lg shadow-xl bg-white w-100 h-36 lg:h-40 hover:bg-[#e1f5fe]">
                        <div class="flex justify-center w-100 mt-5 w-40  xl:w-48 lg:w-48 hover:scale-105 duration-1000'">
                            <a href="#!">
                                <img class="rounded-t-md w-20 h-20 text-center flex" src={car} alt="" />
                            </a>
                        </div>
                        <h2 className='mt-3 text-sm lg:text-[16px]'>Automotive Essentials</h2>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;