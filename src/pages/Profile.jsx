import React from "react";
import ProfileForm from "../components/Profile/ProfileForm";

function Profile({user,  setUser}) {
  return (
    <div>
      <h2>Профайл</h2>
      <ProfileForm user={user}   setUser={ setUser} />
    </div>
  );
}

export default Profile;
