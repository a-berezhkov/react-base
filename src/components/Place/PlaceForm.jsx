import React, { useState } from "react";

function PlaceForm({setCards}) {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");

  const sendData = async (name, adress) => {
    const response = await fetch(
      "https://66f17adb4153791915511635.mockapi.io/places",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name, adress }),
      }
    );
    const data = await response.json()
  
    
    setCards((prev) => [...prev, data])
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await sendData(name, adress);
  };

  return (
    <form method="POST" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="adress"
        value={adress}
        onChange={(event) => setAdress(event.target.value)}
      />
      <button type="submit">Отправить</button>
    </form>
  );
}

export default PlaceForm;
