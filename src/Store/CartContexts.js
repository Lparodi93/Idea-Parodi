import { createContext, useState } from "react";

const CartContext = createContext({
    products: [],
    addItem: () => { },
    removeItem: () => { },
    clear: () => { },
    isInCart: () => { },
    getCartQuantity: () => {},
    getTotalPrice: () => {}
});

export const CartContextProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);

    function addItem (product) {
        const itemRepeat = productList.findIndex(item => item.id === product.id)

        if (itemRepeat !== -1) {
            setProductList(productList.map(p => p.id === product.id ? { ...p, quantity: p.quantity + product.quantity } : p))

        } else {
            setProductList([product, ...productList]);
        }
    }

    function removeItem(id) {
        const indexToRemove = productList.findIndex(item => item.id === id);

        if (productList[indexToRemove].quantity === 1) {
            setProductList(productList.filter(i => i.id !== id))
        } else {
            setProductList(productList.map(p => p.id === id ? { ...p, quantity: p.quantity - 1 } : p));
        }
    }

    function clear() {
        setProductList([]);
    }

    function isInCart(id) {
        return productList.map(p => p.id).indexOf(id) !== -1;
    }

    function getCartQuantity () {
        return productList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }

    function getTotalPrice() {
        return productList.reduce((total, value) => {
            return total + value.price*value.quantity
        }, 0)
    }

    return (
        <>
            <CartContext.Provider value={{
                products: productList,
                addItem,
                removeItem,
                clear,
                isInCart,
                getCartQuantity,
                getTotalPrice
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}



export default CartContext;