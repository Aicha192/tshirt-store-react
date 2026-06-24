import Card from "../components/card";
import { listCards, } from "../data/data";
import ShopComponent from "./Shop-Component";
import { Link } from "react-router-dom";

export default function Shop() {
  return (
    <>
      <section className="px-10 py-10">
        <ShopComponent title="Shop" total={listCards.length} />
        <div className="grid grid-cols-4 gap-4">
          {listCards.slice(2, 12).map((card, index) => (
            <Link to={`/shop/${card.id}`} key={card.id}>
              <Card
                key={index}
                id={card.id}
                name={card.name}
                image={card.image}
                price={card.price}
                category={card.category}
                size={card.size}
                pourcentage={card.pourcentage}
                description={card.description}
              />
            </Link>
          ))}
        </div>
      </section>
      <div className="flex items-center justify-center text-center ">
        <p className="border border-gray-400 py-2 px-4 font-semibold text-sm">
          No more products to show.
        </p>
      </div>
    </>
  );
}
