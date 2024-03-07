import React from 'react';
import img from "../assets/img/heroimg.png";

const Hero = () => {
    return (
        <div className="dark:bg-gray-900 dark:text-white ">
            <div className="min-h-screen container flex flex-col justify-center md:flex-row md:justify-center items-center">
                {/* Content section */}
                <div className="w-full md:w-2/4 space-y-8 text-center md:text-start mt-24 md:mt-10">
                    <div>
                        <h3 className="font-bold text-4xl md:text-5xl">Dive into our</h3>
                        <h1 className="font-bold text-5xl md:text-7xl mt-2 text-primary">
                         Cheesy Bluster
                        </h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
                        veritatis voluptas voluptatem accusantium modi omnis repellat vero
                        eveniet, culpa esse perferendis dicta, aperiam obcaecati fugit?
                        Beatae nisi nostrum temportibus laborum?
                    </p>
                    <button className="bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in">
                        Order Now
                    </button>
                </div>
                
                {/* Img section */}
                <div className='w-2/5'>
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
