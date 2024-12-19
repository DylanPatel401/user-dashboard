import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchUserActivities } from "../api/api.js";
import UserActivities from "../components/userActivities.js";
import "./home.js"

const Post = () => {
  const [activities, setActivities] = useState([]);
  const location = useLocation();
  const { id } = location.state || {}; // Retrieve the user ID passed via navigation

  useEffect(() => {
    const loadData = async () => {
      try {
        const allActivities = await fetchUserActivities();
        const userActivities = allActivities.filter(
          (activity) => activity.userId === id
        );
        setActivities(userActivities);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, [id]); 

  return (
    <div className="App">

        <UserActivities activities={activities} />
    </div>
  );
};

export default Post;
