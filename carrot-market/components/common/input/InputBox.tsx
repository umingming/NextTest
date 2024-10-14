export default function InputBox({
    label,
    placeholder,
}: {
    label?: string;
    placeholder?: string;
}) {
    return (
        <>
            {label && (
                <label
                    htmlFor={label}
                    className="mb-1 block text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}
            <textarea
                id={label}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500"
                rows={4}
                placeholder={placeholder}
            />
        </>
    );
}
