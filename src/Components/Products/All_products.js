import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import product from '../../Assets/Slider/slider1.jpg'
import { Link } from 'react-router-dom';
const All_products = ({ test }) => {

    console.log(test)

    return (
        <div className='lg:px-12 lg:py-6 px-2'>

            <h2 className='text-2xl mb-5'>All Products</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>

                <div className='hover:scale-105 duration-1000'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={product}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Formula & Energy Boosters
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>Price: 500$</p>
                            </Typography>
                        </CardContent>
                        <div className='mb-5'>
                            <Button className='text-center' color="success" size="small" variant="contained">Add to cart</Button>
                            <Button style={{ marginLeft: '10px' }} className='text-center' size="small" variant="outlined">details</Button>
                        </div>

                    </Card>
                </div>

                <div className='hover:scale-105 duration-1000'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={product}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Formula & Energy Boosters
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>Price: 500$</p>
                            </Typography>
                        </CardContent>
                        <div className='mb-5'>
                            <Button className='text-center' color="success" size="small" variant="contained">Add to cart</Button>
                            <Button style={{ marginLeft: '10px' }} className='text-center' size="small" variant="outlined">details</Button>
                        </div>
                    </Card>
                </div>
                <div className='hover:scale-105 duration-1000'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={product}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Formula & Energy Boosters
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>Price: 500$</p>
                            </Typography>
                        </CardContent>
                        <div className='mb-5'>
                            <Button className='text-center' color="success" size="small" variant="contained">Add to cart</Button>
                            <Button style={{ marginLeft: '10px' }} className='text-center' size="small" variant="outlined">details</Button>
                        </div>
                    </Card>
                </div>

                <div className='hover:scale-105 duration-1000'>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image={product}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                Formula & Energy Boosters
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>Price: 500$</p>
                            </Typography>
                        </CardContent>
                        <div className='mb-5'>
                            <Button className='text-center' color="success" size="small" variant="contained">Add to cart</Button>
                            <Link to='/Product_details'>
                                <Button style={{ marginLeft: '10px' }} className='text-center' size="small" variant="outlined">details</Button>

                            </Link>
                        </div>
                    </Card>
                </div>
            </div>


        </div>
    );
};

export default All_products;