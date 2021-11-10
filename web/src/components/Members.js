import React from "react";

function Members({ members }) {
  return (
    <div className="Members">
      <div className="EndOfMessages">
        <strong>Integrantes </strong>
      </div>
      <div className="DayLine" />
      <div>
        {members.length > 0 &&
          members.map((member, index) => (
            <div key={index} className="Member">
              <div className="Member">
                <div className="MemberStatus" />
                {member.username ?? member.email}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Members;
