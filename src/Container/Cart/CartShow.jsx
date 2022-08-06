import { useContext } from "react";
import { CartContext } from "../../Components/Context";

function CartShow ({items}) {
    const {removeItem} = useContext(CartContext);

    const quitarItem = () => {
        removeItem(items.id)
    }

    return (
        <div>
            <h1> {items.name} </h1>
            <img src={items.image} alt='No hay imagen'></img>
            <h3> {items.precio} </h3>
            <h2> {items.qty} </h2>
            <div>
                <button onClick={quitarItem} > x </button>
            </div>
        </div>
    );
}

export default CartShow;