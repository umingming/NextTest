import { TEXT } from "@/constants/styleConstants";
import { User } from "@prisma/client";

export default function CardProfile({
    children,
    isLarge = false,
    imagePx = isLarge ? 14 : 12,
    user,
}: Readonly<{
    children: React.ReactNode;
    isLarge?: boolean;
    imagePx?: number;
    user?: User;
}>) {
    const imageStyle = `h-${imagePx} w-${imagePx} rounded-full bg-slate-300`;
    const nameFontSize = isLarge ? TEXT.SIZE.BASE : TEXT.SIZE.SMALL;
    const nameColor = isLarge ? TEXT.COLOR.DARK : TEXT.COLOR.DEFAULT;

    return (
        <div className="flex cursor-pointer items-center space-x-3 py-3">
            <div className={imageStyle} />
            <div>
                <p className={`${nameFontSize} ${nameColor} font-medium`}>
                    {user?.name ?? "Steve Jebs"}
                </p>
                {children}
            </div>
        </div>
    );
}
