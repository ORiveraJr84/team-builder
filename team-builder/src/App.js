import React, { useState } from "react";
import Member from "./component/Member";
import MemberForm from "./component/MemberForm";
import "./App.css";

function App() {
  const [teamMember, setTeamMember] = useState([
    {
      id: "",
      name: "",
      email: "",
      role: "",
    },
  ]);

  const [memberToEdit, setMemberToEdit] = useState({});

  const addMember = (member) => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <MemberForm addMember={addMember} memberToEdit={memberToEdit} />
      {teamMember.map((member, index) => (
        <div key={index} className="memberCard">
          <Member key={index} member={member} />
          <button
            onClick={() => {
              setMemberToEdit(member);
            }}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
