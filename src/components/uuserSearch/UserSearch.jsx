import { useEffect, useState } from "react";

import UserCard from "../userCard/UserCard"; 


import "./UserSearch.css";
export const UserSearch = () => {
  const [search, setSearch] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=100")
      .then(res => res.json())
      .then(data => setAllUsers(data.users));
  }, []);

  useEffect(() => {
    const results = allUsers.filter(user =>
      user.email.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(results);
  }, [search, allUsers]);

  return (
    <div className="user-search">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar correo"
      />

      <div className="card-container">
        {filteredUsers.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};
