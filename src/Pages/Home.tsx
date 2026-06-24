import { listCards } from "../data/data";
import Temoignage from "../components/Temoignage";
import TitleComponent from "../components/title.component";
import Card from "../components/card";


export default function () {
  return (
    <>
     
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
          {listCards.slice(0, 4).map((card, index) => (
            <Card
              key={index}
              id={card.id}
              name={card.name}
              image={card.image}
              price={card.price}
              category={card.category}
              size={card.size}
              description={card.description}
            />
          ))}
        </div>
      </section>

      <section className="flex mx-8 gap-8 my-20 ">
        <div className="w-1/2 space-y-8 items-center justtify-center text-center">
          <img
            src="/public/images/imgi_7_collection-02.jpg"
            alt="collection2"
            className="w-full h-100"
          />
          <TitleComponent
            Subtitle="Men"
            Title="The base collection-Ideal every day"
          />
          <button
            className="bg-black text-white rounded-sm px-4 py-2 
               gap-4 hover:cursor-pointer"
          >
            Shop Now
          </button>
        </div>
        <img
          src="/public/images/imgi_96_collection-01.jpg"
          alt="collection1"
          className="w-1/2 h-150 object-cover"
        />
      </section>

      <section
        className="bg-[url(/public/images/imgi_97_bg-01.jpg)] bg-fixed bg-no-repeat bg-cover
          mx-8 ">
        <div className="space-y-8 bg-black/50 h-screen flex flex-col items-center justify-center text-center">
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

       <section className="mx-8 space-y-8 my-20">
        <TitleComponent
          Subtitle="Summer Collection"
          Title="On Sale T-Shirts"
        />

        <div className="grid grid-cols-4 gap-4">
          {listCards.slice(0, 4).map((card, index) => (
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

      <section className="mx-8 gap-8 my-20  text-center">
        <div>
          <Temoignage />
        </div>
      </section>

      <section className="flex mx-8 my-20 ">
        <div className="grid grid-cols-2 gap-8 ">
          <div className="relative group cursor-pointer">
            <img
              src="public/images/imgi_73_cat-men.jpg"
              alt="catmen"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white py-2 text-center ">
              <h3 className="font-semibold tracking-wider">Men</h3>
              <p className="text-sm text-gray-500">5 products</p>
            </div>
          </div>

          <div className="relative group cursor-pointer ">
            <img
              src="public/images/imgi_79_cat-women.jpg"
              alt="catwomen"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white py-2 text-center ">
              <h3 className="font-semibold tracking-wider">Men</h3>
              <p className="text-sm text-gray-500">5 products</p>
            </div>
          </div>
        </div>
      </section>
       </>
     )
     }