import React from 'react';
import img from '../assets/img/deals2.jpg';

const Deals = () => {
  return (
    <div className="dark:bg-900 dark:text-white">
      <div className="min-h-screen container flex flex-col justify-center pt-16 md:pt-0">
        {/* Heading */}
        <h1 className="font-semibold text-4xl text-center text-secondary mt-5">
          Hot Deals
        </h1>

        <div className="flex flex-col md:flex-row gap-10 mt-8">
          {/* Image Section */}
          <div className="w-full md:w-2/4">
            <img className="rounded-lg" src={img} alt="img" />
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/4 text-center md:text-start space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Exclusive Special Combo!
            </h1>
            <h3 className="text-3xl md:text-4xl font-semibold text-secondary">
              Elevate your Meal with our Specials Bundle
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ratione, veritatis voluptas voluptatem accusantium modi omnis
              repellat vero eveniet, culpa esse perferendis dicta, aperiam
              obcaecati fugit? Beatae nisi nostrum temportibus laborum?
            </p>
            <button className="bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out">
              Visit Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;

