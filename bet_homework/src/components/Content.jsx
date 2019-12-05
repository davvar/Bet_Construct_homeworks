import React from 'react';
import users from './users';
import Users from "./Users.jsx";

const isUsersActive = bool =>
  users
    .filter(({ isActive }) => isActive === bool)
    .sort(
      (user1, user2) =>
        user2.balance.replace(/[$,]/g, "") - user1.balance.replace(/[$,]/g, "")
    );

let activeUsers = isUsersActive(true);
let inactiveUsers = isUsersActive(false);

const Content = () => {
    return (
        <div className='content'>
          <Users users={activeUsers} status="Active" />
          <Users users={inactiveUsers} status="Inactive" />
        </div>
    );
}
 
export default Content;