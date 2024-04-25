import React from "react";

function messageInput() {
  return (
    <>
      <form className="px-4 my-3">
        <div className="w-full relative">
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-zinc-700 border-gray-600 text-white"
            placeholder="Enviar un mensaje..."
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3 text-white"
          >Enviar</button>
        </div>
      </form>
    </>
  );
}

export default messageInput;
