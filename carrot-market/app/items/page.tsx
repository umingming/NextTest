import ButtonCreate from "@/components/common/button/ButtonCreate";
import CardItem from "@/components/common/card/CardItem";

export default function Items() {
    return (
        <div className="flex flex-col space-y-5">
            {[...Array(10)].map((_, i) => (
                <CardItem key={`item-${i}`} />
            ))}
            <ButtonCreate />
        </div>
    );
}