import React from "react";

let data;
const getToken = async () => {
  const token = await fetch("http://localhost:3000/api/token");
  data = await token.json();
};
const del = () => {
  // api request to get token from the server

  console.log(data, "nooo");

  return <div>del</div>;
};

export default del;
