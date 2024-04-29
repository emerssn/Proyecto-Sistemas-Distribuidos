import React, { useEffect, useRef } from "react";
import Message from "./message.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";
import useListenMessages from "../../hooks/useListenMessages.js";

const messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id}
          ref={lastMessageRef}
          >
            <Message message={message} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center">
          Envíe un mensaje para iniciar la conversación
        </p>
      )}
    </div>
  );
};

export default messages;
