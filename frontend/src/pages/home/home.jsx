import React from "react";
import Logout from "../../components/logout/logout.jsx";
import Chats from "../../components/chats/chats.jsx";
import Contacts from "../../components/contacts/contacts.jsx";
import Perfil from "../../components/perfil/perfil.jsx";
import Search from "../../components/search/search.jsx";
import Chat from "../../components/chats/chat.jsx";
import ChatContainer from "../../components/chats/chatContainer.jsx";

function home() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-secondary p-4 flex flex-col justify-between">
          <div className="flex flex-col items-center">
            <Perfil />
            <Chats />
            <Contacts />
          </div>
          <Logout />
        </div>
        <div className="bg-white">
          <Search />
          <div className="flex flex-col">
            <Chat />
            <Chat />
          </div>
        </div>
        <ChatContainer />
      </div>
    </>
  );
}

export default home;
