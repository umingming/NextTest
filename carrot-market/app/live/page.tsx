import ButtonCreate from "@/components/common/button/ButtonCreate";
import { ICON_KEY } from "@/constants/keyConstants";

export default function Live() {
    return (
        <div className="space-y-2 divide-y-2 px-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
                <div key={i} className="pt-4">
                    <div className="aspect-video w-full rounded-md bg-slate-300 shadow-sm" />
                    <h3 className="mt-2 text-lg font-medium text-gray-700">
                        Lets try potatos
                    </h3>
                </div>
            ))}
            <ButtonCreate iconKey={ICON_KEY.LIVE} />
        </div>
    );
}
