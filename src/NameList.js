import React from "react";
import Person from "./Person";

function NameList() {
  const arr = ["Ravi", "Sumit", "Prabhat"];
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React"
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular"
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue"
    }
  ];

  const NameMap = arr.map((name, index) => (
    <h1 key={index}>
      {index} {name}
    </h1>
  ));
  // const PersonList = persons.map((person) => (
  //   <Person key={person.id} person={person}></Person>
  // ));
  return <div>{NameMap}</div>;
}

export default NameList;
