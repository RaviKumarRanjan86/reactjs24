import React from "react";

function Person({ person, key }) {
  return (
    <h1>
      {person.id} this is {person.name}. I am {person.age} years old.I am
      skilled at {person.skill}
    </h1>
  );
}

export default Person;
