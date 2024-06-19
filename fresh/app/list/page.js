"use client";

import { useState } from "react";

export default function List() {
    const products = ["Tomato", "Pasta", "Coconut"];
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {products.map((product) => (
                <Food product={product} />
            ))}
        </div>
    );
}

function Food({ product }) {
    const imagePath = `/${product.toLowerCase()}.png`;
    // 변경 감지가 필요없는 변수는 굳이 state로 할 필요 없음.
    const [count, setCount] = useState(0);

    const increseCount = () => setCount(prev => prev + 1);
    const decreseCount = () => setCount(prev => prev - 1);

    return (
        <div className="food">
            <img src={imagePath} className="food-img" />
            <h4>{product}</h4>
            <button onClick={decreseCount}>-</button>
            <span>{count}</span>
            <button onClick={increseCount}>+</button>
        </div>
    );
}
