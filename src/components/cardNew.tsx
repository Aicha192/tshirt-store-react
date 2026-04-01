import type { listCardsType } from "../data/type";

export interface CardProps {
  name: string;
  image: string;
  price: number;
  category: string;
  size: string[];
  pourcentage?: string;
}

export default function CardNew({
  name,
  image,
  price,
  category,
  size,
  pourcentage,
}: listCardsType) {
  return (
    <div className="space-y-3">
        <div className="relative">
      <img src={image} className="h-[400px] w-full object-cover" alt={name} />
      <span className="absolute top-3 left-3 bg-white shadow px-3 py-1 rounded-full text-sm">
        {pourcentage}</span>
        </div>
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

