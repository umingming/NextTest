export default function ProfileSummary({
    children,
    isLarge = false,
}: Readonly<{
    children: React.ReactNode;
    isLarge?: boolean;
}>) {
    const imagePx = isLarge ? "14" : "12";
    const nameFontSize = isLarge ? "text-base" : "text-sm";
    const nameColor = isLarge ? "text-gray-900" : "text-gray-700";

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
