import ProfileSummary from "@/components/profile/ProfileSummary";

export default function Chats() {
    return (
        <div className="divide-y-[1px]">
            {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
                <div className="px-4">
                    <ProfileSummary key={i}>
                        <p className="text-sm text-gray-500">
                            See you tomorrow in the corner at 2pm!
                        </p>
                    </ProfileSummary>
                </div>
            ))}
        </div>
    );
}
