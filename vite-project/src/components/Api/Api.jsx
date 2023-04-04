import React from "react";

const Api = () => {
  const url = fetch("https://jsonplaceholder.typicode.com/users");

  let users = {
    name: "Nita",
    age: 20,
    address: {
      city: "kathmandu",
      counrty: "nepal",
    },
  };

  console.log(users.address.counrty);

  let array = [1, 2, 3, 4, 5, 6];

  return <></>;
};

export default Api;
