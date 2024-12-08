const { faker } = require("@faker-js/faker");
import { getApp, getApps, initializeApp } from "firebase/app";
import { collection, getDocs, addDoc, getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
};

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);

// Fetch cities
export async function getCities() {
  try {
    const citiesCol = collection(db, "users");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    console.log(cityList);
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
}

// Add fake data
export const addFakeData = async () => {
  try {
    const productsCollection = collection(db, "products");

    for (let i = 0; i < 10; i++) {
      const fakeProduct = {
        title: faker.commerce.productName(), // Ürün başlığı
        price: faker.commerce.price(10, 500, 2, "£"), // Fiyat (£ işareti ile)
        image: faker.image.url({
          width: 640,
          height: 480,
          category: "products",
        }), // Resim URL'si
        description: faker.commerce.productDescription(), // Ürün açıklaması
        category: faker.commerce.department(), // Kategori (isteğe bağlı)
      };
      await addDoc(productsCollection, fakeProduct);
      console.log(`Product ${i + 1} added:`, fakeProduct);
    }
  } catch (error) {
    console.error("Error adding fake products:", error);
  }
};
