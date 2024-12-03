// Next.js Imports
import Image from 'next/image';


// Icons and Images import
import { PiBellThin } from 'react-icons/pi';
import { SiWish } from 'react-icons/si';
import { TfiSearch } from 'react-icons/tfi';
import { PiUserLight } from 'react-icons/pi';
import { SlBasket } from 'react-icons/sl';
import Logo from "../public/assets/logo.png"

const Navbar = () => {
  return (
    <div className="w-full h-16 flex flex-col">
      {/* Top banner */}
      <div className="w-full h-6 bg-black flex justify-center items-center py-1">
        <h6 className="text-white text-xs uppercase">Extra 10% Discount For this Monday</h6>
      </div>
      {/* Main Navbar */}
      <div className="grid grid-cols-3 h-full bg-transparent p-3 mx-8 items-center justify-center">
        {/* Left Section */}
        <div className="flex gap-x-4 text-white uppercase text-sm items-center">
          <h4>Shop</h4>
          <h4>247</h4>
          <h4>Collections</h4>
          <h4>Brand</h4>
          <h4>Looks</h4>
        </div>
        {/* Center Section */}
        <div className="flex justify-center text-white uppercase text-lg font-bold items-center">
            <h1 className='text-2xl tracking-wide'>REPRESENT</h1>
        </div>
        {/* Right Section */}
        <div className="flex gap-x-4 text-white uppercase text-sm items-center justify-end">
          <h4>Retail</h4>
          <h4>The Vault</h4>
          <h4>Prestige</h4>
          <h4>GB/GBP</h4>
          <PiBellThin size={19} />
          <SiWish size={19} />
          <TfiSearch size={19} />
          <PiUserLight size={19} />
          <SlBasket size={19} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
