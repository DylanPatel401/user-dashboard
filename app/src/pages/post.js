import React from 'react';
import { useLocation } from "react-router-dom";

const Post = ({}) => {
  const location = useLocation();
  const { id } = location.state || {}; // Retrieve the ID from state
  console.log(id)
  return <h2>Post screen {id} </h2>;
};

export default Post;
