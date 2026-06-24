import React from "react";
import { listCards, menuList } from "../data/data";
import TitleComponent from "../components/title.component";
import Card from "../components/card";
import { Link } from "react-router-dom";
import {
  Copyright,
  Facebook,
  Instagram,
  Search,
  ShoppingCart,
  Twitter,
} from "lucide-react";
import ShopComponent from "./Shop-Component";

export default function Women() {
  const Women = listCards.filter((p) => p.category === "Women");

  return (
    <>
      

      <section className="px-10 py-10">
       <ShopComponent title="Women" total={5} />
        <div className="grid grid-cols-4 gap-4">
          {Women.slice(1, 7).map((card, index) => (
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
          ))}
        </div>
      </section>

     
          
    </>
  );
}
