import Image from "next/image";

export default function List() {
    const products = ["Tomatoes", "Pasta", "Coconut"];
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {products.map(Food)}
        </div>
    );
}

function Food(product) {
    const imagePath = `/${product.toLowerCase()}.png`;
    return (
        <div className="food">
            <img src={imagePath} className="food-img" />
            <h4>{product}</h4>
        </div>
    );
}
