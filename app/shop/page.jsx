"use client";

import Image from "next/image";
import { useState } from "react";

const Shop = () => {
  const [readMore, setReadMore] = useState(false);
  const text =
    "Discover the latest arrivals from Represent. Some of the latest additions to our new arrivals collection include our collaboration with Metallica, our Spring Summer 24 Collection, and 247 Marathon ranges. Buy now, pay later available with Klarna";

  const truncatedText = `${text.substring(0, 100)}...`;

  return (
    <div>
      <div className="p-6">
        <h2 className="font-semibold text-xl">New Arrivals</h2>
        <p className="text-sm text-gray-400 max-w-[59rem] mt-2 md:flex hidden">
          {text}
        </p>
        <p className="text-sm text-gray-400 max-w-[59rem] mt-2 md:hidden flex">
          {readMore ? text : truncatedText}
        </p>

        {/* Read More" Button */}
        <button
          onClick={() => setReadMore(!readMore)}
          className="text-blue-500 mt-2 hover:underline md:hidden flex"
        >
          {readMore ? "Read Less" : "Read More"}
        </button>

        {/* Products Section */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 mt-12 gap-4">
          <div className="flex flex-col">
            <img
              className="w-auto h-auto"
              src="https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://uk.representclo.com/cdn/shop/files/6FJw9MACj5dzAjdbSIqluNxuoENcubOF-nE_3EMGH5Y.jpg?v=1733440055&width=1109"
              alt="product-image"
            />
            <h2 className="text-md mt-2">Team 247 Insulated Jacket</h2>
            <p className="text-sm text-gray-500">£250.00</p>
          </div>
          <div className="flex flex-col">
            <img
              className="w-auto h-auto"
              src="https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://uk.representclo.com/cdn/shop/files/6FJw9MACj5dzAjdbSIqluNxuoENcubOF-nE_3EMGH5Y.jpg?v=1733440055&width=1109"
              alt="product-image"
            />
            <h2 className="text-md mt-2">Team 247 Insulated Jacket</h2>
            <p className="text-sm text-gray-500">£250.00</p>
          </div>

          <div className="flex flex-col">
            <img
              className="w-auto h-auto"
              src="https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://uk.representclo.com/cdn/shop/files/6FJw9MACj5dzAjdbSIqluNxuoENcubOF-nE_3EMGH5Y.jpg?v=1733440055&width=1109"
              alt="product-image"
            />
            <h2 className="text-md mt-2">Team 247 Insulated Jacket</h2>
            <p className="text-sm text-gray-500">£250.00</p>
          </div>

          <div className="flex flex-col">
            <img
              className="w-auto h-auto"
              src="https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://uk.representclo.com/cdn/shop/files/6FJw9MACj5dzAjdbSIqluNxuoENcubOF-nE_3EMGH5Y.jpg?v=1733440055&width=1109"
              alt="product-image"
            />
            <h2 className="text-md mt-2">Team 247 Insulated Jacket</h2>
            <p className="text-sm text-gray-500">£250.00</p>
          </div>

          <div className="flex flex-col">
            <img
              className="w-auto h-auto"
              src="https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://uk.representclo.com/cdn/shop/files/6FJw9MACj5dzAjdbSIqluNxuoENcubOF-nE_3EMGH5Y.jpg?v=1733440055&width=1109"
              alt="product-image"
            />
            <h2 className="text-md mt-2">Team 247 Insulated Jacket</h2>
            <p className="text-sm text-gray-500">£250.00</p>
          </div>

          <div className="flex flex-col">
            <img
              className="w-auto h-auto"
              src="https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://uk.representclo.com/cdn/shop/files/6FJw9MACj5dzAjdbSIqluNxuoENcubOF-nE_3EMGH5Y.jpg?v=1733440055&width=1109"
              alt="product-image"
            />
            <h2 className="text-md mt-2">Team 247 Insulated Jacket</h2>
            <p className="text-sm text-gray-500">£250.00</p>
          </div>

          <div className="flex flex-col">
            <img
              className="w-auto h-auto"
              src="https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://uk.representclo.com/cdn/shop/files/6FJw9MACj5dzAjdbSIqluNxuoENcubOF-nE_3EMGH5Y.jpg?v=1733440055&width=1109"
              alt="product-image"
            />
            <h2 className="text-md mt-2">Team 247 Insulated Jacket</h2>
            <p className="text-sm text-gray-500">£250.00</p>
          </div>

          <div className="flex flex-col">
            <img
              className="w-auto h-auto"
              src="https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://uk.representclo.com/cdn/shop/files/6FJw9MACj5dzAjdbSIqluNxuoENcubOF-nE_3EMGH5Y.jpg?v=1733440055&width=1109"
              alt="product-image"
            />
            <h2 className="text-md mt-2">Team 247 Insulated Jacket</h2>
            <p className="text-sm text-gray-500">£250.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
