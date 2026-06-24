import React from "react";
import {
  Copyright,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Search,
  ShoppingCart,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import { menuList } from "../data/data";
import SectionTitle from "./Section-Title";

export default function Contact() {
  return (
    <>
      

      <div className="px-6 md:px-16 py-16 ">
        <SectionTitle
          title="Contact"
          subtitle="Proin eu ante vel mauris molestie dignissim non eget nunc. 
    Integer ac massa orci. Suspendisse vulputate semper nunc eget rhoncus."
        />
        <div className="relative flex flex-col md:flex-row items-center md:items-start mt-10">
          <div
            className="p-10 rounded-md bg-[#FAEDEB] w-full md:w-1/2 min-h-[600px] 
        flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo
              tempor, congue justo at, lobortis orci.
            </p>
            <div className="space-y-4 ">
              <div className="flex items-baseline gap-3">
                <MapPin size={18} />
                <span className="underline cursor-pointer">
                  123 Fifth Avenue, New York, NY 10160
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <Mail size={18} strokeWidth={1.5} />
                <span className="underline cursor-pointer">
                  contact@info.com
                </span>
              </div>
              <div className="flex items-baseline gap-3">
                <Phone size={18} strokeWidth={1.5} />
                <span>9-334-7565-9787</span>
              </div>
            </div>
          </div>
          <form
            className="bg-white p-10 rounded-md shadow-md w-full md:w-1/2  md:absolute
        md:right-10 md:top-10 z-10 min-h-[500px] space-y-10"
          >
            <div className="grid grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name *"
                className="border border-gray-300 p-3 
                rounded-md w-full bg-gray-50"
              />
              <input
                type="text"
                placeholder="Last Name *"
                className="border border-gray-300 p-3
                 rounded-md w-full bg-gray-50"
              />
            </div>
            <input
              type="Email"
              placeholder="Your Email Address *"
              className="border border-gray-300 p-3 
            rounded-md w-full bg-gray-50"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-300 p-8 rounded-md
              w-full bg-gray-50"
            ></textarea>
            <button className="bg-black text-white px-6 py-3 rounded-md">
              Send
            </button>
          </form>
        </div>
      </div>
      
          
    </>
  );
}
