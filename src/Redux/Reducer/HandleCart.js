import React from "react";

const getInitialState = () => {
const storeCart = localStorage.getItem("cart");
return storeCart ? JSON.parse(storeCart) : [];

};

const HandleCart = (state = getInitialState(),  Action) => {
    const product = Action.payload;
    let updatedCart;

    switch(Action.type){
    case "ADDITEM":
        const exist = state.find((x) => x.id === product.id);

        if(exist){
            updatedCart = state.map((x) =>
                x.id === product.id
                    ? { ...x, qty: x.qty + 1 }
                    : x
            );
        } else {
            updatedCart = [...state, { ...product, qty: 1 }];
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;

    case "DELITEM":
        const exist2 = state.find((x) => x.id === product.id);

        if(exist2.qty === 1){
            updatedCart = state.filter((x) => x.id !== exist2.id);
        } else {
            updatedCart = state.map((x) =>
                x.id === product.id
                    ? { ...x, qty: x.qty - 1 }
                    : x
            );
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;

    default:
        return state;

    }
}
export default HandleCart;