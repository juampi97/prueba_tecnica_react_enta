import React, { useId } from "react";
import { useOrder } from "./hooks/useOrder";


const Header = () => {  
    const buttonAscId = useId()
    const buttonDescId = useId()

    const {setOrder} = useOrder()

    const handleChangeAsc = () => {
        setOrder("asc")      
    }
    
    const handleChangeDesc = () => {
        setOrder("desc")
    }

  return (
    <>
    <div className="header_style">
        <button id={buttonAscId}  onClick={handleChangeAsc} className="order_button">Order Asc</button>
        <button id={buttonDescId} onClick={handleChangeDesc} className="order_button">Order Desc</button>
    </div>
    </>
  );
};

export default Header;