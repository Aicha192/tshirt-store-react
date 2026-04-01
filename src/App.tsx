import { Copyright, Search, ShoppingCart, Star } from "lucide-react";
import TitleComponent from "./components/title.component";
import { listCards,   menuList } from "./data/data";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Card from "./components/card";





function App() {
  return (
    <>
      <nav className="flex justify-between items-center px-8 py-4">
        <ul className="flex gap-4">
          {menuList.map((menu) => (
            <li
              className={`text-lg font-bold ${menu.color ? menu.color : "text-pink-500"}`}
            >
              <a href={menu.lien}>{menu.name}</a>
            </li>
          ))}
        </ul>

        <img src="/public/images/imgi_1_logo-regular.png" alt="" />
        <div className="flex items-center gap-8">
          <button>
            <Search size={16} strokeWidth={3} />
          </button>
          <button className="flex gap-2 relative items-center">
            <span>F cfa 00</span> <ShoppingCart strokeWidth={1.5} />
          </button>
          <span className="bg-black absolute top-5 min-w-5 h-5 flex items-center justify-center right-35 text-white rounded-full text-xs">
            0
          </span>
          <button>Se connecter</button>
        </div>
      </nav>

      <section className="bg-[#FAEDEB] mx-8 flex items-center justify-center">
        <div className="space-y-8">
          <h5>Woman</h5>
          <h1 className="text-6xl font-bold max-w-md">
            Slick. Modern. Awesome.
          </h1>
          <button className="bg-black rounded-xs py-3 px-6 text-white">
            Shop collection
          </button>
        </div>

        <div className="bg-[url(/public/images/imgi_94_hero-bg.png)] bg-contain">
          <img
            src="/public/images/imgi_2_hero.png"
            className="h-150 w-full object-cover"
            alt=""
          />
        </div>
      </section>

      <section className="mx-8 space-y-8 my-20">
        <TitleComponent
          Subtitle="Summer Collection"
          Title="T-shirt les plus populaies"
        />

        <div className="grid grid-cols-4 gap-4">
          {listCards.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              name={card.name}
              image={card.image}
              price={card.price}
              category={card.category}
              size={card.size}
            />
          ))}
        </div>
      </section>

      <section className="flex mx-8 gap-8 my-20 ">
        <div className="w-1/2 space-y-8 items-center justtify-center text-center">
          <img src="/public/images/imgi_7_collection-02.jpg" alt="collection2" className="w-full h-100" />
           <TitleComponent
          Subtitle="Men"
          Title="The base collection-Ideal every day"
          />
          <button className="bg-black text-white rounded-sm px-4 py-2 
           gap-4 hover:cursor-pointer">Shop Now</button>
          </div>
        <img src="/public/images/imgi_96_collection-01.jpg" alt="collection1" className="w-1/2 h-150 object-cover"/>
      </section>

      <section className="bg-[url(/public/images/imgi_97_bg-01.jpg)] bg-fixed bg-no-repeat bg-cover bg-black
      mx-8 gap-8 my-20 flex h-screen items-center justify-center text-center">
         <div className="space-y-8 ">
          <TitleComponent
          Subtitle="New Collection"
          Title="Be different in your own way! 
                 Find your unique style."
          color="text-white"      
          />
          <button className="bg-black rounded-xs py-3 px-6 text-white hover:cursor-pointer">
            Shop collection
          </button>
        </div>
      </section>
     

      <section  className="mx-8 space-y-8 my-20">
        <TitleComponent
          Subtitle="Summer Collection"
          Title="On Sale T-Shirts"
        />
        <div className="grid grid-cols-4 gap-4">
          {listCards.slice(5, 7).map((card, index) => (
           <Card
              key={index}
              name={card.name}
              image={card.image}
              price={card.price}
              category={card.category}
              size={card.size}
              pourcentage={card.pourcentage}
            />
          ))}
        </div>
      </section>

      <section  className="mx-8 gap-8 my-20  text-center">
        <div className="space-y-8 ">
         <h2 className="text-3xl font-extrabold ">Reviews</h2>
         <p className="text-xl font-bold underline">“ Very good quality T-shirts and lorem ipsum dolor sit amet, <br />
           consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />
           labore et dolore magna aliqua quis ipsum! ”</p>
        </div>
        <div className="flex justify-center gap-2 mt-8">
           {[...Array(5)].map((_, i) => (
            <Star
            key={i} className="fill-yellow-400 text-yellow-400" />
           ))}
        </div>
        <p className="text-lg text-gray-500">Jane Oliver</p>
      </section>

     <section className="flex mx-8 my-20 ">
        <div className="grid grid-cols-2 gap-8 ">
        <div className="relative group cursor-pointer">
           <img src="public/images/imgi_73_cat-men.jpg" alt="catmen" className="w-full h-[600px] object-cover" />
           <div className="absolute bottom-6 left-6 right-6 bg-white py-2 text-center ">
            <h3 className="font-semibold tracking-wider">Men</h3>
            <p className="text-sm text-gray-500">5 products</p>
           </div>
          </div>

          <div className="relative group cursor-pointer ">
            <img src="public/images/imgi_79_cat-women.jpg" alt="catwomen" className="w-full h-[600px] object-cover"/>
           <div className="absolute bottom-6 left-6 right-6 bg-white py-2 text-center ">
            <h3 className="font-semibold tracking-wider">Men</h3>
            <p className="text-sm text-gray-500">5 products</p>
           </div>
          </div>
        </div>
      </section>

      <section  className="bg-[#FAEDEB] mx-8 flex items-center justify-center h-screen ">
       <div className="space-y-8 ">
        <h3 className="text-2xl font-bold">Subscribe to get offers in your inbox</h3>
        <p className="text-gray-600">Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod 
          condimentum</p>
          <div className="gap-4 flex">
            <input type="email" placeholder="Your Email Address*" className="text-2xl border border-gray-600
           rounded-md py-1 px-6" />
           <button className="bg-black text-white text-2xl py-2 px-4 rounded-md cursor-pointer ">Subscribe</button>
          </div>
            <ul className="flex gap-6 justify-center items-center text-center">
          {menuList.map((menu) => (
            <li
              className="text-xm text-gray-600"
            >
              <a href={menu.lien}>{menu.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 items-center justify-center ">
          <Facebook className="bg-white py-1 px-1" /> <Twitter className="bg-white py-1 px-1" />
         <Instagram className="bg-white py-1 px-1" />
        </div>
       </div>
      </section>
      <footer className="bg-black text-white text-center py-10 mx-8">
        <p>Copyright <button><Copyright size={12} strokeWidth={1.5} /></button> 2026 T-Shirts Store | Powered by T-Shirts Store</p>
      </footer> 
    </>
  );
}

export default App;
