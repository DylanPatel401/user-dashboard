import React from "react";
import { useNavigate } from "react-router-dom";
import "./userProfile.css";

const UserProfile = ({ user }) => {
  const navigate = useNavigate();

  // Navigate to "/post" when a user card is clicked
  const handleCardClick = (id) => {

    navigate("/post", {state: {id:id}});
  };

  if (!user || user.length === 0) {
    return <p>No user data available.</p>;
  }

  return (
    <div className="user-profile">
      {user.map((u, index) => (
        <div
          key={index}
          className="user-card pressable"
          onClick={() => handleCardClick(u.id)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") handleCardClick(u.id);
          }}
        >
          <h2>{u.name}</h2>
          <p>
            <strong>Email:</strong> {u.email}
          </p>
          <p>
            <strong>Phone:</strong> {u.phone}
          </p>
          <p>
            <strong>Address:</strong> {u.address.street}, {u.address.suite}, {u.address.city},{" "}
            {u.address.zipcode}
          </p>
          <hr />
        </div>
      ))}
    </div>
  );
};


export default UserProfile;
