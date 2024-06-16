import { cost, Title } from "./data.js";

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <Title />
            <CartItem />
            <CartItem />
        </div>
    );
}

function CartItem() {
    return (
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>{cost}</p>
        </div>
    );
}
