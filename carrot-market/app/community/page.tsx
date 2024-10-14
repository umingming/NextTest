import ButtonCreate from "@/components/common/button/ButtonCreate";
import IconBase from "@/components/common/icon/IconBase";
import { ICON_KEY } from "@/constants/keyConstants";

export default function Community() {
    return (
        <div className="space-y-8 px-4">
            {[1, 2, 3, 4, 5, 6].map((_, i) => (
                <div
                    key={i}
                    className="flex cursor-pointer flex-col items-start"
                >
                    <span className="text-gray-80 flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                        동네질문
                    </span>
                    <div className="mt-2 text-gray-700">
                        <span className="font-medium text-orange-500">Q.</span>{" "}
                        What is the best mandu restaurant?
                    </div>
                    <div className="mt-5 flex w-full items-center justify-between text-xs font-medium text-gray-500">
                        <span>니꼬</span>
                        <span>18시간 전</span>
                    </div>
                    <div className="mt-3 flex w-full space-x-5 border-b-[1.5px] border-t py-2.5 text-gray-700">
                        <span className="flex items-center space-x-2 text-sm">
                            <IconBase iconKey={ICON_KEY.QUESTION} size={4} />
                            <span>궁금해요 1</span>
                        </span>
                        <span className="flex items-center space-x-2 text-sm">
                            <IconBase iconKey={ICON_KEY.CHAT} size={4} />
                            <span>답변 1</span>
                        </span>
                    </div>
                </div>
            ))}
            <ButtonCreate iconKey={ICON_KEY.WRITE} />
        </div>
    );
}
