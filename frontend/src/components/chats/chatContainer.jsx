import React, { useEffect } from "react";
import Messages from "./messages.jsx";
import MessageInput from "./messageInput.jsx";
import FondoChat from "../../assets/fondochat.jpg";
import useConversation from "../../zustand/useConversation.js";
import { useAuthContext } from "../../context/AuthContext.jsx";

const chatContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="flex flex-col w-full relative">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <>
            <div className="bg-primary px-4 py-4 mb-2 z-10 relative">
              <span>{selectedConversation.username}</span>
            </div>
            <Messages />
            <MessageInput />
          </>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${FondoChat})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: -1,
            }}
          />
        </>
      )}
    </div>
  );
};

export default chatContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="px-4 text-center text-black flex flex-col items-center gap-2">
        <p>¡Bienvenido {authUser.username}!</p>
        <p>Selecciona un chat para comenzar una conversación</p>
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${FondoChat})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />
    </div>
  );
};
