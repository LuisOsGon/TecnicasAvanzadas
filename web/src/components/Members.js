import React from "react";

function Members() {
  return (
    <div className="Members">
      <div className="EndOfMessages"><strong>Integrantes </strong></div>
			<div className="DayLine" />
      <div>
        <div className="Member">
          <div className="MemberStatus offline" />
          Fede
        </div>
        <div className="Member">
          <div className="MemberStatus online" />
          Luis
        </div>
      </div>
    </div>
  );
}

export default Members;
