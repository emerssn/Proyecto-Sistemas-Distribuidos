import React from "react";

function chat() {
  return (
    <>
      <div className="flex gap-2 items-center rounded p-2 py-2 cursor-pointer hover:bg-primary px-4 pr-8">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <div className="text-sm font-normal">Luis Brain</div>
          </div>
          <div className="text-xs text-gray-500">Mensaje de prueba pero más largo</div>
        </div>
      </div>
    </>
  );
}

export default chat;
