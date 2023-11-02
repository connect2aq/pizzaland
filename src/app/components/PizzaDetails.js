import { useState } from 'react';

import Image from 'next/image';
import SizeSelection from './SizeSelection';
import CrustSelection from './CrustSelection';

const PizzaDetails = ({ pizza }) => {
  // pizza size state management
  const [size, setSize] = useState('small');

  // pizza crust state management
  const [crust, setCrust] = useState('traditional');

  // additional topping state management
  const [addtionalTopping, setAdditionalTopping] = useState([]);

  // additional topping price state management
  const [addtionalToppingPrice, setAddtionalToppingPrice] = useState(0);

  // price state
  const [price, setPrice] = useState(0);

  return (
    // pizza image
    <>
      <div>
        <Image
          width={450}
          height={450}
          src={pizza.image}
          alt="pizza image"
        ></Image>
      </div>

      {/* pizza name */}
      <div>
        <h2 className="capitalize">{pizza.name}</h2>

        {/* pizza size and crust */}
        <div className="">
          <span>
            {size === 'small'
              ? '25 cm'
              : size === 'medium'
              ? '30 cm'
              : size === 'large'
              ? '35 cm'
              : null}
          </span>
          <span>, {crust} crust</span>
        </div>
      </div>

      {/* size selection component */}
      <SizeSelection
        pizza={pizza}
        size={size}
        setSize={setSize}
      ></SizeSelection>

      {/* curst selection */}
      <CrustSelection
        crust={crust}
        setCrust={setCrust}
      ></CrustSelection>
    </>
  );
};

export default PizzaDetails;
