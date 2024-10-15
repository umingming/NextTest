import CardItem from "@/components/common/card/CardItem";

export default function Bought() {
    return (
        <div className="flex flex-col space-y-5">
            {[...Array(10)].map((_, i) => (
                <CardItem key={`bought-item-${i}`} />
            ))}
        </div>
    );
}
