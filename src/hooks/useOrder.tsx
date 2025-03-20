import { useContext } from "react";
import { OrderContext } from "../context/order";

export function useOrder() {
  const { order, setOrder } = useContext(OrderContext);

  const orderData = (data) => {
    // let usuarios = [...data];
    let usuarios = structuredClone(data);

    if (order == "asc") {
      usuarios.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
        return 0;
      });
    }

    if (order == "desc") {
      usuarios.sort((a, b) => {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      });
    }

    return usuarios;
  };

  return { order, setOrder, orderData };
}
