import { useContext } from "react";
import { OrderContext } from "../constext/order";

export function useOrder() {
    const {order, setOrder} = useContext(OrderContext)

    const orderData = (data) => {
        
        let usuarios = []
        
        if(order == 'asc'){
            for(let i = 0; i < data.length; i++) {
                usuarios.push(data[i])
            }
          }
    
          if(order == 'desc'){
            for(let j = data.length - 1; j >= 0; j--) {
                usuarios.push(data[j])
            }
          }
          
          return usuarios
    }

    return{order, setOrder, orderData}
}