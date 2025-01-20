import React from 'react'

function PlaceCard({card}) {
  return (
    <div>
          <p> {card.name} </p>
          <p> {card.adress} </p>
    </div>
  )
}

export default PlaceCard