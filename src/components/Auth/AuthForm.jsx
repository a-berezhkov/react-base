import React, { useState } from "react";

function AuthForm({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `https://66f17adb4153791915511635.mockapi.io/users?email=${email}`
    );
    const userData = await response.json();
    setUser(userData[0]);
    localStorage.setItem("accessToken",userData[0].accessToken);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default AuthForm;
