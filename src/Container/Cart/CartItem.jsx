import CartShow from "./CartShow";

function CartItem({cart}) {

    return (
        <div className="App">
            {cart.map(e =>
            <CartShow 
            key={e.id}
            items={e}
            ></CartShow>)}

        </div>
    );
}

export default CartItem;