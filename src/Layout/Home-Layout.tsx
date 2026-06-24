import {
  Copyright,
  Facebook,
  Instagram,
  Search,
  ShoppingCart,
  Twitter,
} from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { menuList } from "../data/data";

export default function HomeLayout() {
  return (
    <>
      <div>
        <nav className="flex justify-between items-center px-8 py-4">
          <ul className="flex gap-4">
            {menuList.map((menu) => (
              <li className="text-lg font-semibol">
                <Link to={menu.lien}>{menu.name}</Link>
              </li>
            ))}
          </ul>

          <img
            src="/public/images/imgi_1_logo-regular.png"
            alt=""
            className="cursor-pointer"
          />
          <div className="flex items-center gap-8">
            <button className="cursor-pointer">
              <Search size={16} strokeWidth={3} />
            </button>
            <button className="flex gap-2 relative items-center cursor-pointer">
              <span>F cfa 00</span> <ShoppingCart strokeWidth={1.5} />
            </button>
            <span className="bg-black absolute top-5 min-w-5 h-5 flex items-center justify-center right-35 p-1 text-white rounded-full text-xs">
              0
            </span>
            <Link to="/auth/login">
              <button className="cursor-pointer">Se connecter</button>
            </Link>
          </div>
        </nav>

        <Outlet />

        <section className="bg-[#FAEDEB] mx-8 flex items-center justify-center h-screen mt-10">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-bold">
              Subscribe to get offers in your inbox
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod
              condimentum
            </p>
            <div className="gap-4 flex">
              <input
                type="email"
                placeholder="Your Email Address*"
                className="border border-gray-600
               rounded-md py-1 px-6"
              />
              <button className="bg-black text-white text-xl py-2 px-4 rounded-md cursor-pointer ">
                Subscribe
              </button>
            </div>
            <ul className="flex gap-6 justify-center items-center text-center">
              {menuList.map((menu) => (
                <li className="text-xm text-gray-600">
                  <a href={menu.lien}>{menu.name}</a>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 items-center justify-center ">
              <Facebook className="bg-white py-1 px-1" />{" "}
              <Twitter className="bg-white py-1 px-1" />
              <Instagram className="bg-white py-1 px-1" />
            </div>
          </div>
        </section>
        <footer className="bg-black text-white text-center py-10 mx-8">
          <p>
            Copyright{" "}
            <button>
              <Copyright size={12} strokeWidth={1.5} />
            </button>{" "}
            2026 T-Shirts Store | Powered by T-Shirts Store
          </p>
        </footer>
      </div>
    </>
  );
}
