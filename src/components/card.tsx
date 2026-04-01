import React from "react";
import type { listCardsType } from "../data/type";

export interface CardProps {
  name: string;
  image: string;
  price: number;
  category: string;
  size: string[];
}

export default function Card({
  name,
  image,
  price,
  category,
  size,
}: listCardsType) {
  return (
    <div className="space-y-3">
      <img src={image} className="h-[400px] w-full object-cover" alt={name} />
      <h5>{category}</h5>
      <h3 className="text-2xl font-semibold">{name}</h3>
      <p className="text-xl font-medium">{price} FCFA</p>
      <div className="flex gap-2">
        {size.map((a, e) => (
          <button
            key={e}
            className="border cursor-pointer border-gray-500 px-2 py-1 rounded"
          >
            {a.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

