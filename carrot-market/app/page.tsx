import ButtonCreate from "@/components/common/button/ButtonCreate";
import CardItem from "@/components/common/card/CardItem";

export default function Home() {
    return (
        <div className="flex flex-col space-y-5">
            {[...Array(10)].map((_, i) => (
                <CardItem key={i} />
            ))}
            <ButtonCreate />
        </div>
    );
}
