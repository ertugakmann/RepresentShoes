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
import Link from 'next/link';

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
        <div className="fixed inset-0 bg-white flex flex-col p-4">
          <button
            className="absolute top-4 right-4 text-black text-2xl"
            onClick={closeOverlay}
          >
            ✕
          </button>
          {overlayContent === 'menu' && (
  <div className='flex flex-col h-full p-4'>
    {/* Üst Kısım */}
    <div>
      <h3 className='text-2xl font-semibold'>Menu</h3>
      <ul className='text-lg font-semibold mt-12'>
        <li><Link href={"/login"}><span>New Arrivals</span></Link></li>
        <li><Link href={"/login"}><span>Owners Club</span></Link></li>
        <li><Link href={"/login"}><span>247</span></Link></li>
      </ul>
    </div>

    {/* Orta Kısım (Shop) */}
    <div className='mt-10'>
      <span className='uppercase text-xs text-gray-500'>Shop</span>
      <ul className='flex flex-col gap-y-3 mt-2 font-semibold text-sm'>
        <li><Link href={"/login"}><span>Black Friday Sale</span></Link></li>
        <li><Link href={"/login"}><span>Clothing</span></Link></li>
        <li><Link href={"/login"}><span>Collections</span></Link></li>
        <li><Link href={"/login"}><span>Featured</span></Link></li>
        <li><Link href={"/login"}><span>Footwear</span></Link></li>
        <li><Link href={"/login"}><span>Accessories</span></Link></li>
        <li><Link href={"/login"}><span>Gift Card</span></Link></li>
      </ul>
    </div>

    {/* Alt Kısım */}
    <div className='mt-auto'>
      <ul className='text-xs text-gray-500 font-semibold'>
        <li><Link href={"/login"}><span>Client Services</span></Link></li>
        <li><Link href={"/login"}><span>Company</span></Link></li>
        <li><Link href={"/login"}><span>Brand</span></Link></li>
        <li><Link href={"/login"}><span>Terms & Privacy</span></Link></li>
        <li><Link href={"/login"}><span>GB / GBP £ / English</span></Link></li>
      </ul>
    </div>
  </div>
)}

          {overlayContent === 'search' && <p className="text-xl">Search Content</p>}
          {overlayContent === 'notifications' && (
            <p className="text-xl">Notifications Content</p>
          )}
          {overlayContent === 'wishlist' && (
            <p className="text-xl">Wishlist Content</p>
          )}
          {overlayContent === 'profile' && (
            <p className="text-xl">Profile Content</p>
          )}
          {overlayContent === 'cart' && <p className="text-xl">Cart Content</p>}
        </div>
      )}
    </div>
  );
};

export default Navbar;
