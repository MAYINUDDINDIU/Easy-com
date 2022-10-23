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
import { useEffect, useState } from 'react';
import axios from 'axios';
import P_details from './P_details';
import Loading from '../../Loading';
const Product = () => {
    const [product, setProduct] = useState([]);

    // console.log(product);

    // fetch('https://api.sanghubazar.com/store/categories/')
    //     .then(Response => Response.json())
    //     .then(data => setProduct(data));

    useEffect(() => {
        axios.get('https://api.sanghubazar.com/store/categories/')
            .then(data => {
                const loadedData = data.data;
                console.log(loadedData);

                setProduct(loadedData);

            })
    }, [])



    return (
        <div>
            <h2 className=' mt-3 mb-3 text-sm lg:text-xl text-shadow lg:mt-5 lg:mb-5 font-bold'>Find your items from wide range of product categories</h2>


            <div class="grid ml-3 mr-3 lg:ml-10 lg:mr-10 grid-cols-2 lg:grid-cols-6 gap-2">

                {
                    product.length === 0 ? <div className='justify-center flex'><p className='text-lg'><Loading /></p></div> :
                        product.map(products => <P_details key={products.id} products={products}></P_details>)

                }


            </div>


        </div>
    );
};

export default Product;