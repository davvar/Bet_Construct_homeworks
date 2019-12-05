import React from "react";
import Column from './Column';

const Users = ({ users, status }) => {
  return (
    <div className="users">
      <h2>{status} Users</h2>
      <Column users={users}/>
    </div>
  );
};

export default Users;
