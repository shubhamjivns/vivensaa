import React from "react";
import { Card, CardContent } from "@mui/material";

const categories = [
    { name: "Ceiling Lights", img: "/images/ceiling.jpg" },
    { name: "Smart Lights", img: "/images/smart.jpg" },
    { name: "Outdoor Lights", img: "/images/outdoor.jpg" },
    { name: "Decorative Lamps", img: "/images/lamp.jpg" },
];

const HomeCategories = () => {
    return (
        <section className="py-10">
            <h2 className="text-center text-3xl font-bold mb-6 text-gray-800">
                Shop by Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {categories.map((cat, i) => (
                    <Card
                        key={i}
                        className="hover:shadow-2xl transition-all duration-300 rounded-2xl"
                    >
                        <img src={cat.img} alt={cat.name} className="rounded-t-2xl h-48 w-full object-cover" />
                        <CardContent className="text-center font-semibold text-lg">
                            {cat.name}
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>



    );
};

export default HomeCategories;
