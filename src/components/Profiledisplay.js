import React from "react";
import { useLocation } from "react-router-dom";

function ProfileDisplay() {
  const location = useLocation();

  // Check if the user is logged in
  const user = location.state?.user;

  return (
    <div className="profile-display">
      {user && (
        <p>
          Logged in as: <strong>{user.email}</strong>
        </p>
      )}
    </div>
  );
}

export default ProfileDisplay;
