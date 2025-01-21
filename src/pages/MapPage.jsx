import React from "react";
import PlaceList from "../components/Place/PlaceList";

function MapPage({user}) {
  return (
    <div>
      { user.email}
      <PlaceList />
    </div>
  );
}

export default MapPage;
