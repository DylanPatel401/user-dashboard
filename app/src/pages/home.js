
import React, { useState, useEffect } from "react";
import { fetchUsers, fetchUserActivities } from "../api/api.js";
import UserProfile from "../components/userProfile.js"
import "./Home.css";


function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const users = await fetchUsers();
        
        setUser(users);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, []);

  return (
    <div className="App">

      {user && <UserProfile user={user} />}
    </div>
  );
}

export default Home;
