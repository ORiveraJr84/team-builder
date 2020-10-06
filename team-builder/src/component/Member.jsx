import React from "react";

const Member = ({ member }) => {
  return (
    <div>
      <h1>{member.name}</h1>
      <p>{member.email}</p>
      <p>{member.role}</p>
    </div>
  );
};

export default Member;
