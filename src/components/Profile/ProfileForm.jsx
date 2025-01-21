import React, { useEffect, useState } from "react";

function ProfileForm({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(user?.email);
    setName(user?.name);
    setPassword(user?.password);
  }, [user]);

  const onSubmitHandler = async (event, id) => {
    event.preventDefault();

    const response = await fetch(
      `https://66f17adb4153791915511635.mockapi.io/users/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          //  "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify({ email, name, password }),
      }
    );
    console.log(response);
    
    const userData = await response.json();

    setUser(userData);
  };

  return (

     
    <div onSubmit={(event) => onSubmitHandler(event, user.id)}>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Изменить профиль</button>
      </form>
    </div>
  );
}

export default ProfileForm;
