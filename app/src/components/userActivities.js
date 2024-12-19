import React from "react";

const UserActivities = ( {activities} ) => {
    if (!activities || activities.length === 0) {
        return <p>No activities available.</p>;
    }

  return (
    <div className="user-activities">
      <ul>
          <li key={activities[0].id}>
            <strong>{activities[0].title}</strong>
            <p>{activities[0].body}</p>
          </li>
        
      </ul>
    </div>
  );
};

export default UserActivities;
