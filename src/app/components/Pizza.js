'use client';

import { useState } from 'react';
import Modal from 'react-modal';
import { IoCloseOutline } from 'react-icons/io5';

import Image from 'next/image';
import PizzaDetails from './PizzaDetails';

//bind modal to body
Modal.setAppElement('body');

const Pizza = ({ pizza }) => {
  // modal state
  const [modal, setModal] = useState(false);

  // open Modal
  const openModal = () => {
    setModal(true);
  };

  // close Modal
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {/* Main Pizza Image */}
      <div className="group py-2 px-4 rounded-xl">
        <Image
          onClick={openModal}
          className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
          src={pizza.image}
          width={270}
          height={270}
          alt="pizza image"
        ></Image>

        {/* Pizza Name */}
        <div
          className="text-xl font-bold mb-3 transition-all duration-300 cursor-pointer capitalize"
          onClick={openModal}
        >
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
            onClick={openModal}
          >
            Choose
          </button>
          {/* btn -> visible (sm) --- hidden (lg) */}
          <button
            className="btn btn-sm gradient text-sm lg:hidden"
            onClick={openModal}
          >
            starts at {pizza.priceSm}
          </button>
        </div>
        {/* Modal */}
        {modal && (
          <Modal
            isOpen={modal}
            onRequestClose={closeModal}
            contentLabel="Pizza Modal"
            className="bg-white w-full h-full lg:max-h-[600px]"
          >
            {/* close modal icon */}
            <div
              onClick={closeModal}
              className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
            >
              <IoCloseOutline className="text-4xl text-orange"></IoCloseOutline>
            </div>
            {/* pizza details in modal */}
            <PizzaDetails pizza={pizza}></PizzaDetails>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Pizza;
