import { useContext } from "react";
import { OrderContext } from "../constext/order";

export function useOrder() {
    const {order, setOrder} = useContext(OrderContext)

    const orderData = (data) => {

    }

    return{order, setOrder, orderData}
}