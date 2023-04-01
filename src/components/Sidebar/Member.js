import React from 'react';

const Member = ({ team }) => {
  const { name, avatar, id } = team;
  console.log(team);
  return (
    <div class="checkbox-container">
      <img src={avatar} alt='...' class="team-avater" />
      <p class="label">{name}</p>
    </div>
  );
};

export default Member;