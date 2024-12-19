
const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const fetchUserActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/posts`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
};

export {fetchUsers, fetchUserActivities}
