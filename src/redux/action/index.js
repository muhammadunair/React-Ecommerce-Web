// For Add Item To Cart

export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}


// For Delete Item from Cart Cart

export const delCart = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}


