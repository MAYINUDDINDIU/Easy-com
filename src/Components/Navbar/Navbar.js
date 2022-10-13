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
import { Link, NavLink } from 'react-router-dom';
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";


const Navbar = () => {
    return (


        <div>

            {/* <!-- Section: Design Block --> */}
            <section class="mb-0 ">
                <nav class="navbar navbar-expand-lg shadow-md bg-[#4b830d] text-white lg:px-24 py-2 bg-white relative flex items-center w-full justify-between">
                    <div class="px-6 w-full flex flex-wrap items-center justify-between">
                        <div class="flex items-center">
                            <button
                                class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-white hover:text-white focus:text-white transition-shadow duration-150 ease-in-out mr-2"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContentY"
                                aria-controls="navbarSupportedContentY"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    class="w-5"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                    ></path>
                                </svg>

                            </button>
                            <li class="nav-item shadow-blue-600/50 static mr-0 lg:mr-20 ml-5 text-white list-none font-bold lg:text-2xl" >EASY<span className='text-[#ffc107] shadow-blue-600/50'>BAZAR</span> </li>
                        </div>
                        <div class="navbar-collapse collapse grow items-center" id="navbarSupportedContentY">
                            <ul class="navbar-nav mr-auto lg:flex lg:flex-row">
                                <NavLink to='/'>
                                    <li class="nav-item text-lg">
                                        <a class="nav-link font-bold block pr-2 lg:px-2 py-2 text-white hover:text-white focus:text-white transition duration-150 ease-in-out flex items-center" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">HOME</a>
                                    </li>
                                </NavLink>

                                <li class="nav-item dropdown static text-white text-lg  lg:mx-5">
                                    <a class="nav-link block pr-2 lg:px-2 py-2 text-white hover:text-white  focus:text-white  transition duration-300 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                                        href="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX"
                                        data-bs-toggle="dropdown" aria-expanded="false">All Products
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2"
                                            role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor"
                                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                                            </path>
                                        </svg>
                                    </a>
                                    <div class="dropdown-menu w-full mt-0 hidden shadow-lg bg-white absolute left-0 top-full rounded-b-lg"
                                        aria-labelledby="dropdownMenuButtonX">
                                        <div class="px-6 lg:px-8 py-5">
                                            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                                <ul>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={baby}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Baby Care</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={cooking}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Kitchen and Cooking</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={fruits}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Fruits & Vagetables</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={drinks}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Drinks & Beverage</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={home_care}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Home Care & Cleaning</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={beauty_baby}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Beauty & Body Care</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={health_care}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Health & Adult Care</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={milk}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Milk & Dairy</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={snaks}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Snacks & Spread</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={office}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Office & Schooling</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={kitchen}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Kitchen Appliance</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={car}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Automotive Essentials</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={health_care}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Health & Adult Care</span>
                                                        </a>

                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={health_care}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Health & Adult Care</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={health_care}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Health & Adult Care</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={health_care}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Health & Adult Care</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={health_care}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Health & Adult Care</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item text-sm py-3 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                                                            href="#">
                                                            <img
                                                                src={health_care}
                                                                alt="" class="w-6 mr-3" />
                                                            <span>Health & Adult Care</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <NavLink to='/All_product'>
                                    <li class="nav-item text-lg mb-2  lg:mb-0">
                                        <a class="nav-link block pr-2 lg:px-2 py-2 text-white  hover:text-white focus:text-white transition duration-50 ease-in-out flex items-center" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">About us</a>
                                    </li>
                                </NavLink>

                            </ul>
                        </div>
                        <div class="flex mr-12 items-center lg:ml-auto">

                            <li className='list-none text-2xl'><BsFillCartPlusFill /></li>
                            <div class="flex justify-center">
                                <div>
                                    <div class="dropdown relative mt-1">
                                        <button
                                            class="
                                                dropdown-toggle
                                                px-6
                                                py-2.5
                                                text-white
                                                font-medium
                                                text-2xl
                                                leang-tight
                                                uppercase
                                                rounded
                                              active:text-white
                                                transition
                                                duration-150
                                                ease-in-out
                                                flex
                                                items-center
                                                whitespace-nowrap
                                                "
                                            type="button"
                                            id="dropdownMenuButton1d"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <BsFillPersonLinesFill />
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="caret-down"
                                                class="w-2 ml-2"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 320 512"
                                            >

                                            </svg>
                                        </button>
                                        <ul
                                            class="
                                            dropdown-menu
                                            min-w-max
                                            absolute
                                            hidden
                                            bg-white
                                            text-base
                                            z-50
                                            float-left
                                            py-2
                                            list-none
                                            text-left
                                            rounded
                                            shadow-lg
                                            mt-1
                                            hidden
                                            m-0
                                            bg-clip-padding
                                            border-none
                                            "
                                            aria-labelledby="dropdownMenuButton1d"
                                        >
                                            <NavLink to='login'>
                                                <li>
                                                    <a class="
                                                dropdown-item
                                                text-sm
                                                py-2
                                                px-12
                                                font-normal
                                                block
                                                w-full
                                                whitespace-nowrap
                                                bg-transparent
                                                text-gray-700
                                                hover:bg-gray-100
                                                "
                                                        href="#"
                                                    >Login</a>
                                                </li>
                                            </NavLink>

                                            <li>
                                                <a class="dropdown-item
                                                            text-sm
                                                            py-2
                                                            px-12
                                                            font-normal
                                                            block
                                                            w-full
                                                            whitespace-nowrap
                                                            bg-transparent
                                                            text-gray-700
                                                            hover:bg-gray-100
                                                            "href="#"
                                                >Sign up</a
                                                >
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </nav>

            </section>
            {/* <!-- Section: Design Block --> */}

        </div>

    );
};

export default Navbar;