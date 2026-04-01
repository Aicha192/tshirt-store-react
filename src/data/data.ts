import type { listCardsType } from "./type";

interface menuType {
  name: string;
  lien:string;
  color?: string
}

export const menuList : menuType[] = [
  {
     name: "T-shirt",
     lien: "/t-shirt",
     color: "text-green-500"
  },
  {
     name: "Women",
     lien: "women",
  },
  {
     name: "Men",
     lien: "men",
     color: "text-yellow-500"
  },
  {
     name: "About",
     lien: "/about",
  },
  {
     name: "Contact",
     lien: "/contact",
     color: "text-red-500"
  },
]

export const listCards: listCardsType[] = [
  {
    name: "T-shirt Homme (Violet)",
    image: "/public/images/imgi_32_product-09-a.jpg",
    category: "Men",
    price: 10000,
    size: ["XS", "S", "M", "XL", "XXL"],
  },
  {
    name: "T-shirt Femme (Blanc)",
    image: "/public/images/imgi_37_product-06-a.jpg",
    category: "Women",
    price: 9000,
    size: ["S", "L", "XL"],
  },
  {
    name: "T-shirt Homme (Blanc)",
    image: "/public/images/imgi_42_product-10-a.jpg",
    category: "Men",
    price: 8500,
    size: ["XS", "M", "XL"],
  },
  {
    name: "T-shirt Femme (Gris)",
    image: "/public/images/imgi_6_product-08-a-300x366.jpg",
    category: "Women",
    price: 10500,
    size: ["M", "L", "XL"],
  },
  {
    name: "T-shirt Homme (Saumon)",
    image: "/public/images/imgi_73_cat-men.jpg",
    category: "Men",
    price: 11000,
    size: ["XS", "M", "XXL"],
  },
  {
    name: "T-shirt Femme (Blanc)",
    image: "/public/images/imgi_79_cat-women.jpg",
    category: "Women",
    price: 7000,
    size: ["XS", "M", "L"],
  },
];

export const listCards2: listCardsType[] = [
  {
    name: "T-shirt Femme (Noir)",
    image: "/public/images/imgi_57_product-01-a.jpg",
    category: "Women",
    price: 10000,
    size: ["XS", "S", "M", "XL", "XXL"],
    pourcentage: "-10%"
  },
  {
    name: "T-shirt Homme (Noir)",
    image: "/public/images/imgi_62_product-05-a.jpg",
    category: "Men",
    price: 9000,
    size: ["S", "L", "XL"],
  },
  {
    name: "T-shirt Homme (Blanc)",
    image: "/public/images/imgi_67_product-03-a.jpg",
    category: "Men",
    price: 8500,
    size: ["XS", "M", "XL"],
    pourcentage: "-14%"
  },
  {
    name: "T-shirt Femme (Gris)",
    image: "/public/images/imgi_6_product-08-a-300x366.jpg",
    category: "Women",
    price: 10500,
    size: ["M", "L", "XL"],
  },
  {
    name: "T-shirt Homme (Saumon)",
    image: "/public/images/imgi_73_cat-men.jpg",
    category: "Men",
    price: 11000,
    size: ["XS", "M", "XXL"],
  },
  {
    name: "T-shirt Femme (Blanc)",
    image: "/public/images/imgi_79_cat-women.jpg",
    category: "Women",
    price: 7000,
    size: ["XS", "M", "L"],
    pourcentage: "-15%"
  },
];

 