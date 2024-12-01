import "../style/globals.css";

export const metadata = {
    title: "REPRESENT Shoes",
    description: "Sneaker Store",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
