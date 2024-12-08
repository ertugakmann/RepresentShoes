"use client";

import { useState } from "react";

const Product = () => {
  const [readMore, setReadMore] = useState(false);
  const text =
    "The Team 247 Insulated Jacket is a lightweight, insulated jacket designed for everyday wear. The jacket features a water-resistant outer shell, a warm insulated lining, and a removable hood. The jacket is finished with a zip-up front, two front pockets, and a logo patch on the sleeve.";

  const truncatedText = `${text.substring(0, 100)}...`;

  return (
    <div className="lg:grid lg:grid-cols-2 flex flex-col w-full lg:p-12 p-8 pt-32 lg:gap-0 gap-3">
      <div className="flex lg:justify-center">
        <img
          className="h-[620px] object-cover"
          src="https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/uk.representclo.com/cdn/shop/files/Ok6cniHfNXI3KCvRJ8Stz-1V0HhMV1lJ4Fw-lUSm-GY.jpg?v=1731512627&width=1280"
          alt="product-detai"
        />
      </div>
      <div className="w-[75%]">
        <h1 className="text-4xl font-bold">Team 247 Insulated Jacket</h1>
        <p className="text-xl mt-4">£250.00</p>
        {
          // Read More Text
          readMore ? (
            <p className="text-md mt-4">{text}</p>
          ) : (
            <p className="text-md mt-4">{truncatedText}</p>
          )
        }

        {/* Read More" Button */}
        <button
          onClick={() => setReadMore(!readMore)}
          className="text-blue-500 mt-2 hover:underline lg:hidden flex"
        >
          {readMore ? "Read Less" : "Read More"}
        </button>

        {/* Size Selector */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Select Size:</h2>
          <div className="mt-4 flex items-center justify-between w-full max-w-md">
            {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
              <button
                key={size}
                className="w-16 h-16 border-2 border-gray-300 hover:border-black flex items-center justify-center text-sm font-medium transition-all focus:border-black focus:outline-none"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
        <button className="mt-4 bg-black text-white py-2 px-4">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
