import React from "react";
import Messages from "./messages.jsx";
import MessageInput from "./messageInput.jsx";
import FondoChat from "../../assets/fondochat.jpg";

function chatContainer() {
  const noChatSelected = true;
  return (
    <div className="flex flex-col w-full relative">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <>
            <div className="bg-primary px-4 py-4 mb-2 z-10 relative">
              <span>Luis Brain</span>
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
}

export default chatContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center h-full w-full">
      <div className="px-4 text-center text-black flex flex-col items-center gap-2">
        <p>¡Bienvenido!</p>
        <p>Selecciona un chat para comenzar a chatear.</p>
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
