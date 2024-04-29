import React from "react";
import { useState } from "react";
import useConversations from "../../zustand/useConversation";
import useGetChats from "../../hooks/useGetChats";
import { set } from "mongoose";


function search() {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversations();
  const { chats } = useGetChats();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    if (search.length < 3) {
      return alert("La búsqueda debe tener al menos 3 caracteres");
    }
    const chat = chats.find((c) => c.username.toLowerCase().includes(search.toLowerCase()));

    if (chat) {
      setSelectedConversation(chat);
      setSearch("");
    } else {
      alert("No se encontró la persona que buscas");
    }
  };

  return (
    <form className="p-4 py-5 flex" onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center h-10 mr-3">
        <input
          type="text"
          className="text-sm"
          placeholder="Buscar personas"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <img className="w-10 mr-10" src="\src\assets\search.png" alt="search" />
    </form>
  );
}

export default search;
