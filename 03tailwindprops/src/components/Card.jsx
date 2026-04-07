import React from "react";

function Card(props) {
    console.log(props.username);
  return (
    <div className="md:max-w-sm w-full p-6 rounded-xl shadow-xl bg-black border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-105 group">
      
      <div className="relative overflow-hidden rounded-lg mb-6">
        <img
          src="https://picsum.photos/400/300?random=90"
          alt="Featured content"
          className="object-cover object-center w-full h-48 transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <h2 className="text-xl font-bold text-white mb-2">
        prakhar
      </h2>

      <p className="text-gray-400 text-sm mb-4">
        manit
      </p>

    </div>
  );
}

export default Card;