'use client';

import Image from 'next/image';

// import pizzaMainImage from '/public/capricciosa.webp';

const Pizza = ({ pizza }) => {
  return (
    <>
      {/* Main Pizza Image */}
      <div className="group py-2 px-4 rounded-xl cursor-pointer">
        <Image
          className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
          src={pizza.image}
          width={270}
          height={270}
          alt="pizza image"
        ></Image>

        {/* Pizza Name */}
        <div className="text-xl font-bold mb-3 transition-all duration-300 cursor-pointer capitalize">
          {pizza.name}
        </div>
        {/* Pizza description */}
        <div className="text-sm font-medium min-h-[60px] mb-6">
          {pizza.description}
        </div>
        {/* Pizza price */}
        <div className="mb-6 flex items-center justify-between">
          {/* price -> hidden (sm) - visible (lg) */}
          <div className="hidden lg:flex text-xl font-semibold">
            starts at {pizza.priceSm}
          </div>
          {/* btn -> hidden (sm) --- visible (lg) */}
          <button
            className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
            onClick={() => {}}
          >
            Choose
          </button>
          {/* btn -> visible (sm) --- hidden (lg) */}
          <button
            className="btn btn-sm gradient text-sm lg:hidden"
            onClick={() => {}}
          >
            starts at {pizza.priceSm}
          </button>
        </div>
      </div>
    </>
  );
};

export default Pizza;
