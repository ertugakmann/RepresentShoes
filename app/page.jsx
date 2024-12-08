"use client";

import { useEffect } from "react";
import { db } from "../lib/firebase";
import { addFakeData } from "../lib/firebase";
import Navbar from "@/components/Navbar";

export default function Home() {
  // DATABASE TESTING
  useEffect(() => {
    addFakeData();
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://sfycdn.speedsize.com/fbaf6506-81e1-43a2-bcc1-80e18c7b0146/https://uk.representclo.com/cdn/shop/files/IMG_5667.jpg?v=1733133618&width=1920)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[100vh] w-full absolute top-0 left-0"
      ></div>
    </>
  );
}
