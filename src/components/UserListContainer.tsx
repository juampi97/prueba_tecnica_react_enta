import React from "react";
import { useState,useEffect } from "react";
import UserListItem from "./userListItem";
import { useOrder } from "./hooks/useOrder";

const UserListContainer = ({data}) => {  
    
    const {order, orderData} = useOrder()
    const [users,setUsers] = useState(null)

    useEffect(()=>{
      if(!data) return
       
      setUsers(orderData(data,order))
       
    },[data, order])  

  return (
    <>
        <div className="table_style">
            <table>
                <tbody>
                    {users?.map((item)=>(
                        <UserListItem key={item.id} user={item} />
                    ))}
                </tbody>
            </table>
        </div>
    </>
  );
};

export default UserListContainer;