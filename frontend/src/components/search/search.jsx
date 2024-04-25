import React from "react";

function search() {
  return (
    <div className="p-4 py-5 flex">
      <label className="input input-bordered flex items-center h-10 mr-3">
        <input type="text" className="text-sm" placeholder="Buscar chat" />
      </label>
      <img className="w-10 mr-10" src="\src\assets\search.png" alt="search" />
    </div>
  );
}

export default search;
