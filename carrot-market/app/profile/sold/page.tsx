import CardItem from "@/components/common/card/CardItem";

export default function Sold() {
    return (
        <div className="flex flex-col space-y-5">
            {[...Array(10)].map((_, i) => (
                <CardItem key={`sold-item-${i}`} />
            ))}
        </div>
    );
}
