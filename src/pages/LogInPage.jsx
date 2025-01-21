import React from "react";
import AuthForm from "../components/Auth/AuthForm";

function LogInPage({setUser}) {
  return (
    <div>
      <h2>Лога</h2>
      <AuthForm setUser={setUser} />
    </div>
  );
}

export default LogInPage;
