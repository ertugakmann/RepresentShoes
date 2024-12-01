"use client";

import { useEffect } from "react";
import { db } from "../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

import { getCities } from "../lib/firebase";

export default function Home() {
    // DATABASE TESTING

    // useEffect(() => {
    //     const getUsers = async () => {
    //         const usersCollection = collection(db, "users");
    //         const userSnapshot = await getDocs(usersCollection);

    //         console.log(userSnapshot.docs.map((doc) => doc.data()));
    //     };

    //     getUsers();
    // }, []);

    useEffect(() => {
        getCities(db);
    }, []);

    return (
        <div>
            <h1 className="text-green-300">Hello World!</h1>
        </div>
    );
}
