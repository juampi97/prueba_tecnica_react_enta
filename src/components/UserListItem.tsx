import React from "react";

const UserListItem = ({user}) => {
    
  
  return (
    <>
        <tr>
            <td>{user.id}</td>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.email}</td>
            <td>{user.location.city}</td>
            <td>{user.location.country}</td>
        </tr>
    </>
  );
};

export default UserListItem;