import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react"

export default function Temoignage() {
  const [index, setIndex] = useState(0)

 const listTemoignage = [
{
    body: "“ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”",
    like: 5,
    name: "Jane Oliver",
    photo: "public/images/portrait-homme-2.avif"
},
{
    body: "Very good quality T-shirts and lorem ipsum dolor sit amet",
    like: 3,
    name: "Mr Dupont",
    photo: "public/images/homme-souriant_1.avif"
},
{
    body: "consectetur adipiscing elit, sed do eiusmod tempor",
    like: 4,
    name: "Mme X",
    photo: "public/images/femme_1.avif"
},
{
    body: "incididunt ut labore et dolore magna aliqua quis ipsum! ",
    like: 5,
    name: "Louis smith",
    photo: "public/images/portrait-homme-2.avif"
},
{
    body: "Very good quality T-shirts and lorem ipsum dolor sit amet",
    like: 6,
    name: "Fatou Diagne",
    photo: "public/images/femme-confiante-2.avif"
},
{
    body:"“ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”",
    like: 3,
    name: "Louis smith",
    photo: "public/images/portrait-homme-2.avif"
},
{
    body: "incididunt ut labore et dolore magna aliqua quis ipsum! ",
    like: 4,
    name:  "Mr Dupont",
    photo: "public/images/homme-souriant_1.avif"
},
{
    body:"“ Very good quality T-shirts and lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis ipsum! ”",
    like: 2,
    name: "Fatou Diagne",
    photo: "public/images/femme-confiante-2.avif"
},
{
    body:"consectetur adipiscing elit, sed do eiusmod tempor",
    like: 2,
    name: "Fatou Diagne",
    photo: "public/images/femme-confiante-2.avif"
},
{
    body: "consectetur adipiscing elit, sed do eiusmod tempor",
    like: 6,
    name: "Jane Oliver",
    photo: "public/images/portrait-homme-2.avif"
}
];

const next = () => {
  setIndex((previous)  => (previous + 1) % listTemoignage.length);
};

const previoux = ()  => {
  setIndex((previous) => (previous - 1 + listTemoignage.length) % listTemoignage.length);
};

return (
  <div className="py-20 text-center relative">
    <h2 className="text-3xl font-bold mb-6">Revieuw</h2>
    <p className="max-w-4xl mx-auto leading-relaxed underline font-semibold">"{listTemoignage[index].body}"</p>
    <div className="flex justify-center gap-2 mt-6">
      {[...Array(listTemoignage[index].like)].map((_, i) => (
        <Star
            key={i} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <img src={listTemoignage[index].photo} className="w-12 h-12 rounded-full 
    mx-auto mt-4 object-cover" alt="photo" />
    <p className="mt-2 text-gray-600 font-medium">{listTemoignage[index].name}</p>
    <button onClick={previoux} disabled={index === 0} className="absolute left-30 top-1/2 -translate-y-1/2 text-3xl 
    disabled:opacity-30 disabled:cursor-not-allowed rounded-full bg-black text-white cursor-pointer">
    <ChevronLeft strokeWidth={1} /></button>
    <button onClick={next} disabled={index === listTemoignage.length - 1} className="absolute right-30 top-1/2 -translate-y-1/2 text-3xl
    disabled:opacity-30 disabled:cursor-not-allowed rounded-full bg-black text-white cursor-pointer">
    <ChevronRight strokeWidth={1} /></button>
  </div>
 ); 
}