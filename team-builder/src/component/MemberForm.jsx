import React, { useState, useEffect } from "react";

const MemberForm = ({ addMember, memberToEdit }) => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  console.log("Member To Edit", memberToEdit);

  const handleChange = (event) => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
  };

  const addUser = (event) => {
    event.preventDefault();
    addMember(teamMember);
    setTeamMember({
      name: "",
      email: "",
      role: "",
    });
  };

  return (
    <form onSubmit={addUser}>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        value={teamMember.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        name="email"
        type="text"
        value={teamMember.email}
        onChange={handleChange}
      />
      <label htmlFor="role">Role:</label>
      <input
        name="role"
        type="text"
        value={teamMember.role}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MemberForm;
