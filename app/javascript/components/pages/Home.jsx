import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page</p>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
