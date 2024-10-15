import CardItem from "@/components/common/card/CardItem";

export default function Loved() {
    return (
        <div className="flex flex-col space-y-5">
            {[...Array(10)].map((_, i) => (
                <CardItem key={`loved-item-${i}`} />
            ))}
        </div>
    );
}
