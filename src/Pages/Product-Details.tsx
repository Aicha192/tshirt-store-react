import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { listCards } from "../data/data";

export default function ProductDetails() {
  const { id } = useParams();

  const product = listCards.find((p) => p.id === Number(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Produit non trouvé</p>;

  return (
    <div className="h-screen flex items-center justify-center gap-15 mx-20">
      <img
        src={product?.image}
        alt={product?.name}
        className="size-135 object-cover object-top"
      />
      <div className="flex flex-col ">
        <div className="space-y-5">
          <p className="text-gray-400 uppercase text-sm">{product?.category}</p>
          <h1 className="text-2xl font-bold">{product?.name}</h1>
          <p className="text-lg font-semibold">{product?.price}</p>
          <div className="flex gap-2">
            {product.size.map((size) => (
              <button
                key={size}
                className="border cursor-pointer border-gray-500 px-2 py-1 rounded"
              >
                {size.toUpperCase()}
              </button>
            ))}
          </div>
          <p className="text-gray-600">{product?.description}</p>
        </div>
        <div className="mt-auto pt-6">
          <div className="flex gap-4 items-center">
            <div className="flex border">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
            <button className="bg-gray-500 text-white px-6 py-2 rounded">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
