import React from "react";
import "./userActivities.css"
const UserActivities = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <p>No activities available.</p>;
  }

  return (
    <div className="user-activities">
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            <strong>{activity.title}</strong>
            <p>{activity.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserActivities;
