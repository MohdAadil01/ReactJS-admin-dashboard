import React from "react";

function Card({ text, author }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-md overflow-hidden mt-4">
      <div className="px-6 py-4">
        <div className="text-gray-800 text-lg font-semibold">{text}</div>
        <div className="text-gray-600 mt-2">- {author}</div>
      </div>
    </div>
  );
}

export default Card;
