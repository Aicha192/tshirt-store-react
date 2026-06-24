import type { listCardsType, SlidesType } from "./type";

interface menuType {
  name: string;
  lien:string;
  color?: string
}

export const menuList : menuType[] = [
  {
     name: "T-shirt",
     lien: "/shop",
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
    id: 1,
    name: "T-shirt Homme (Violet)",
    image: "/public/images/imgi_32_product-09-a.jpg",
    category: "Men",
    price: 10000,
    size: ["XS", "S", "M", "XL", "XXL"],
    pourcentage: "-14%",
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 2,
    name: "T-shirt Femme (Blanc)",
    image: "/public/images/imgi_37_product-06-a.jpg",
    category: "Women",
    price: 9000,
    size: ["S", "L", "XL"],
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 3,
    name: "T-shirt Homme (Blanc)",
    image: "/public/images/imgi_42_product-10-a.jpg",
    category: "Men",
    price: 8500,
    size: ["XS", "M", "XL"],
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 4,
    name: "T-shirt Femme (Gris)",
    image: "/public/images/imgi_47_product-08-a.jpg",
    category: "Women",
    price: 10500,
    size: ["M", "L", "XL"],
    pourcentage: "-15%",
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 5,
    name: "T-shirt Homme (Saumon)",
    image: "/public/images/imgi_73_cat-men.jpg",
    category: "Men",
    price: 11000,
    size: ["XS", "M", "XXL"],
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 6,
    name: "T-shirt Femme (Blanc)",
    image: "/public/images/imgi_79_cat-women.jpg",
    category: "Women",
    price: 7000,
    size: ["XS", "M", "L"],
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
   {
    id: 7,
    name: "T-shirt Femme (Noir)",
    image: "/public/images/imgi_57_product-01-a.jpg",
    category: "Women",
    price: 10000,
    size: ["XS", "S", "M", "XL", "XXL"],
    pourcentage: "-10%",
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 8,
    name: "T-shirt Homme (Noir)",
    image: "/public/images/imgi_62_product-05-a.jpg",
    category: "Men",
    price: 9000,
    size: ["S", "L", "XL"],
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
   {
    id: 9,
    name: "T-shirt Homme (Blanc)",
    image: "/public/images/imgi_67_product-03-a.jpg",
    category: "Men",
    price: 8500,
    size: ["XS", "M", "XL"],
    pourcentage: "-14%",
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
   {
    id: 10,
    name: "T-shirt Femme (Gris)",
    image: "/public/images/imgi_47_product-08-a.jpg",
    category: "Women",
    price: 10500,
    size: ["M", "L", "XL"],
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
   {
    id: 11,
    name: "T-shirt Homme (Saumon)",
    image: "/public/images/imgi_73_cat-men.jpg",
    category: "Men",
    price: 11000,
    size: ["XS", "M", "XXL"],
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
  {
    id: 12,
    name: "T-shirt Femme (Blanc)",
    image: "/public/images/imgi_79_cat-women.jpg",
    category: "Women",
    price: 7000,
    size: ["XS", "M", "L"],
    pourcentage: "-15%",
    description: "Our T-Shirts are lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
  },
];

export const slides: SlidesType[] = [
  {
    image: "https://i.pinimg.com/736x/60/07/f7/6007f7a53cb451eaac86304cf38313da.jpg",
    text: "Capturing Moments, Creating Memories"
  },
  {
    image: "https://i.pinimg.com/1200x/ef/dc/36/efdc3671143243fba300e9d9191bc177.jpg",
    text: "Explore the beauty of nature"
  },
  {
    image: "https://i.pinimg.com/736x/af/64/c0/af64c014c3dfd7602245dd418ac40a4d.jpg",
    text: "Create your own story"
  },
];




 