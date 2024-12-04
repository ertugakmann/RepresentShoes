'use client';

// Next.js Imports
import Image from 'next/image';
import { useState } from 'react';

// Icons and Images Import
import { PiBellThin } from 'react-icons/pi';
import { SiWish } from 'react-icons/si';
import { TfiSearch } from 'react-icons/tfi';
import { PiUserLight } from 'react-icons/pi';
import { SlBasket } from 'react-icons/sl';
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = () => {
  // Use States for Responsive Navbar
  const [isMenu, setIsMenu] = useState(false);
  const [overlayContent, setOverlayContent] = useState('');

  // Overlay close handler
  const closeOverlay = () => {
    setOverlayContent('');
  };

  return (
    <div className="w-full h-16 flex flex-col relative">
      {/* Top Banner */}
      <div className="w-full h-6 bg-black flex justify-center items-center py-1">
        <h6 className="text-white text-xs uppercase">
          Extra 10% Discount For this Monday
        </h6>
      </div>

      {/* Main Navbar */}
      <div className="grid grid-cols-[1fr,auto,1fr] h-full w-full bg-transparent px-3 items-center">
        {/* Left Section */}
        <div className="flex gap-x-4 text-white uppercase xl:text-sm text-[12px] items-center">
          <ul className="lg:flex hidden items-center gap-x-5">
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">247</a>
            </li>
            <li>
              <a href="/">Collections</a>
            </li>
            <li>
              <a href="/">Brand</a>
            </li>
            <li>
              <a href="/">Looks</a>
            </li>
          </ul>
          <ul className="flex lg:hidden items-center gap-x-5">
            <li>
              <button onClick={() => setOverlayContent('menu')}>
                <CiMenuBurger size={18} />
              </button>
            </li>
            <li>
              <button onClick={() => setOverlayContent('search')}>
                <TfiSearch size={18} />
              </button>
            </li>
          </ul>
        </div>

        {/* Center Section */}
        <div className="flex justify-center items-center">
          <h1 className="text-white uppercase text-2xl font-bold tracking-wide">
            REPRESENT
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex gap-x-4 text-white uppercase xl:text-sm text-[12px] items-center justify-end whitespace-nowrap">
          <ul className="lg:flex hidden items-center gap-x-5">
            <li>
              <a href="/">Retail</a>
            </li>
            <li>
              <a href="/">The Vault</a>
            </li>
            <li>
              <a href="/">Prestige</a>
            </li>
            <li>
              <a href="/">GB/GBP</a>
            </li>
            <li>
              <button onClick={() => setOverlayContent('notifications')}>
                <PiBellThin size={18} />
              </button>
            </li>
            <li>
              <button onClick={() => setOverlayContent('wishlist')}>
                <SiWish size={18} />
              </button>
            </li>
            <li>
              <button onClick={() => setOverlayContent('search')}>
                <TfiSearch size={18} />
              </button>
            </li>
            <li>
              <button onClick={() => setOverlayContent('profile')}>
                <PiUserLight size={18} />
              </button>
            </li>
            <li>
              <button onClick={() => setOverlayContent('cart')}>
                <SlBasket size={18} />
              </button>
            </li>
          </ul>
          <ul className="flex lg:hidden items-center gap-x-5">
            <li>
              <button onClick={() => setOverlayContent('profile')}>
                <PiUserLight size={18} />
              </button>
            </li>
            <li>
              <button onClick={() => setOverlayContent('cart')}>
                <SlBasket size={18} />
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {overlayContent && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-black text-2xl"
            onClick={closeOverlay}
          >
            ✕
          </button>
          {overlayContent === 'menu' && <p className="text-xl">Menu Content</p>}
          {overlayContent === 'search' && <p className="text-xl">Search Content</p>}
          {overlayContent === 'notifications' && (
            <p className="text-xl">Notifications Content</p>
          )}
          {overlayContent === 'wishlist' && (
            <p className="text-xl">Wishlist Content</p>
          )}
          {overlayContent === 'profile' && <p className="text-xl">Profile Content</p>}
          {overlayContent === 'cart' && <p className="text-xl">Cart Content</p>}
        </div>
      )}
    </div>
  );
};

export default Navbar;
