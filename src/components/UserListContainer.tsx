import React from "react";
import { useState,useEffect } from "react";
import UserListItem from "./userListItem";
import { useOrder } from "./hooks/useOrder";

const UserListContainer = ({data}) => {  
    
    const {order} = useOrder()
    const [users,setUsers] = useState(null)

    useEffect(()=>{
      if(!data) return
     
      let usuarios = []
      
      if(order == 'asc'){
        for(let i = 0; i < data.length; i++) {
            usuarios.push(data[i])
        }
        setUsers(usuarios)
      }

      if(order == 'desc'){
        for(let j = data.length - 1; j >= 0; j--) {
            usuarios.push(data[j])
        }
        setUsers(usuarios)
      }     
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