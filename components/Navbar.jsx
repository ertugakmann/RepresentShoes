// Next.js Imports
import Image from 'next/image';

// Icons and Images Import
import { PiBellThin } from 'react-icons/pi';
import { SiWish } from 'react-icons/si';
import { TfiSearch } from 'react-icons/tfi';
import { PiUserLight } from 'react-icons/pi';
import { SlBasket } from 'react-icons/sl';
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = () => {
  return (
    <div className="w-full h-16 flex flex-col">
      {/* Top Banner */}
      <div className="w-full h-6 bg-black flex justify-center items-center py-1">
        <h6 className="text-white text-xs uppercase">
          Extra 10% Discount For this Monday
        </h6>
      </div>

     
     
        <div className="grid relative grid-cols-[1fr,auto,1fr] h-full w-full bg-transparent px-3 items-center justify-center">
          {/* Left Section */}
          <div className="flex gap-x-4 text-white uppercase xl:text-sm text-[12px] items-center">
            {/* Desktop Left Section */}
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
          {/* Mobile Left Section */}
          <ul className="flex lg:hidden items-center gap-x-5">
              <li>
                <a href="/"><CiMenuBurger size={18}/></a>
              </li>
              <li>
                <a href="/"><TfiSearch size={18}/></a>
              </li>
            </ul>

          </div>
          

          {/* Center Section */}
          <div className="flex justify-center text-white uppercase text-lg font-bold items-center text-center w-[260px]">
            <h1 className="text-2xl tracking-wide">REPRESENT</h1>
          </div>

          {/* Right Section */}
          <div className="flex  gap-x-4 text-white uppercase xl:text-sm text-[12px] items-center justify-end whitespace-nowrap">
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
                <a href="/">
                  <PiBellThin size={18} />
                </a>
              </li>
              <li>
                <a href="/">
                  <SiWish size={18} />
                </a>
              </li>
              <li>
                <a href="/">
                  <TfiSearch size={18} />
                </a>
              </li>
              <li>
                <a href="/">
                  <PiUserLight size={18} />
                </a>
              </li>
              <li>
                <a href="/">
                  <SlBasket size={18} />
                </a>
              </li>
            </ul>
             {/* Mobile Left Section */}
          <ul className="flex lg:hidden items-center gap-x-5">
              <li>
                <a href="/"><PiUserLight size={18}/></a>
              </li>
              <li>
                <a href="/"><SlBasket size={18}/></a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
