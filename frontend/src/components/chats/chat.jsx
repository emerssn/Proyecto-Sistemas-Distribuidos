import React from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

function chat({chat}) {
  const { selectedConversation, setSelectedConversation} = useConversation();

  const isSelected = selectedConversation?._id === chat._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(chat._id);
  return (
    <>
      <div className={`flex gap-2 items-center rounded p-2 py-2 cursor-pointer hover:bg-primary px-4 pr-8
      ${isSelected ? "bg-primary" : ""}
      `}
      onClick={() => setSelectedConversation(chat)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={chat.profilePicture} />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <div className="text-sm font-normal">{chat.username}</div>
          </div>
          {/*<div className="text-xs text-gray-500">Mensaje de prueba pero más largo</div>*/}
        </div>
      </div>
    </>
  );
}

export default chat;
