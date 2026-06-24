import { useEffect, useState } from "react";
import { slides } from "../data/data";
import { ArrowRight } from "lucide-react";

export default function AuthSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-1/2 relative rounded-xl overflow-hidden">
      <img src={slides[index].image} className="w-full h-screen object-cover" />
      <div className="absolute top-2 right-5">
        <button className="text-white text-sm rounded-full py-1 px-2 bg-black flex items-center justify-center gap-2">
          Back to website <ArrowRight size={14} strokeWidth={1.5} />
        </button>
      </div>
      <div className="absolute inset-0 flex flex-col bg-black/40 justify-end items-center p-6 text-white">
        <p>{slides[index].text}</p>

        <div className="flex gap-2 mt-4">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-6 rounded-full ${
                index === i ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
