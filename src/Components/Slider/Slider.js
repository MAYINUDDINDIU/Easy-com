import { Carousel } from 'flowbite-react';
import React from 'react';
import slider1 from '../../Assets/Slider/slider1.jpg';
import slider2 from '../../Assets/Slider/slider2.jpg';
const Slider = () => {
    return (
        <div>
            <div className="h-24 sm:h-56 xl:h-80 2xl:h-96 rounded-none ">
                <Carousel className=' h-96' slideInterval={4000}>
                    <img

                        src={slider1}
                        alt="..."
                    />
                    <img
                        src={slider2}
                        alt="..."
                    />
                    <img
                        src={slider1}
                        alt="..."
                    />
                    <img
                        src={slider2}
                        alt="..."
                    />

                </Carousel>
            </div>
        </div>
    );
};

export default Slider;