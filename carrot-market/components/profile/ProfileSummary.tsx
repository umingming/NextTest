import { TEXT } from "@/constants/styleConstants";

export default function ProfileSummary({
    children,
    isLarge = false,
}: Readonly<{
    children: React.ReactNode;
    isLarge?: boolean;
}>) {
    const imagePx = isLarge ? "14" : "12";
    const nameFontSize = isLarge ? TEXT.SIZE.BASE : TEXT.SIZE.SMALL;
    const nameColor = isLarge ? TEXT.COLOR.DARK : TEXT.COLOR.DEFAULT;

    return (
        <div className="flex cursor-pointer items-center space-x-3 py-3">
            <div
                className={`h-${imagePx} w-${imagePx} rounded-full bg-slate-300`}
            />
            <div>
                <p className={`${nameFontSize} ${nameColor} font-medium`}>
                    Steve Jebs
                </p>
                {children}
            </div>
        </div>
    );
}
