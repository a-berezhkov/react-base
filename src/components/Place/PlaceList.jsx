import React, { useEffect, useState } from "react";
import PlaceCard from "./PlaceCard";
import PlaceForm from "./PlaceForm";

function PlaceList() {
  const [cards, setCards] = useState([]);
  console.log(cards);

  const getCards = async () => {
    const response = await fetch(
      "https://66f17adb4153791915511635.mockapi.io/places"
    );
    const data = await response.json();
    setCards(data);
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div>
      <PlaceForm setCards={setCards} />
      {cards.map((el) => (
        <div key={el.id}>
          <PlaceCard card={el} />
        </div>
      ))}
    </div>
  );
}

export default PlaceList;
