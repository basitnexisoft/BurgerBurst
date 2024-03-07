import React from 'react';
import img1 from '../assets/img/menu2.webp';
import img2 from '../assets/img/menu3.webp';
import img3 from '../assets/img/menu4.webp';
import SpecialMenuCard from '../layouts/SpecialMenuCard';

const SpecialMenu = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-secondary">
      <div className="min-h-screen flex flex-col justify-center items-center md:px-32 px-5 pt-16 md:pt-0">
        {/* Heading */}
        <h1 className="font-semibold text-4xl text-center text-secondary my-8">
          Special Menu
        </h1>
          
        {/* Special Menu Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5">
          <SpecialMenuCard img={img1} title="Delight Burger" price="$10.00" />
          <SpecialMenuCard img={img2} title="Jamboree Burger" price="$10.00" />
          <SpecialMenuCard img={img3} title="Burger Burger" price="$10.00" />
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;


