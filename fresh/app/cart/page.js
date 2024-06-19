import { cost, Title } from "./data.js";

export default function Cart() {
    return (
        <div>
            <h4 className="title">Cart</h4>
            <Title />
            <Button background="red" />
            <CartItem product="Tomato" />
            <CartItem product="Potato" />
        </div>
    );
}

function Button({ background }) {
    return <button style={{ background }}>버튼</button>;
}

function CartItem({ product }) {
    return (
        <div className="cart-item">
            <p>{product}</p>
            <p>$40</p>
            <p>{cost}</p>
        </div>
    );
}
