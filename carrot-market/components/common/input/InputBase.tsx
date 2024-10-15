export default function InputBase({
    id,
    children,
    label,
}: {
    id?: string;
    children: React.ReactNode;
    label?: string;
}) {
    return (
        <>
            {label && (
                <label
                    htmlFor={id}
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            {children}
        </>
    );
}
