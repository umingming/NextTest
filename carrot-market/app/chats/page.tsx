import CardProfile from "@/components/common/card/CardProfile";

export default function Chats() {
    return (
        <div className="divide-y-[1px]">
            {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                <div className="px-4">
                    <CardProfile key={i}>
                        <p className="text-sm text-gray-500">
                            See you tomorrow in the corner at 2pm!
                        </p>
                    </CardProfile>
                </div>
            ))}
        </div>
    );
}
