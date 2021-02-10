import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = ({ joke }) => {
  return (
    <div>
      <h1>Hello from Next js</h1>
      <p>Description of the page</p>
      <p>Value CSR: {joke}</p>
    </div>
  );
};

HomePage.getInitialProps = async (ctx) => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const joke = await res.json();
  return { joke: joke.value };
};
export default HomePage;
