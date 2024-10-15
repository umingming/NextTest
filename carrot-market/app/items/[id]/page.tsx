import ButtonText from "@/components/common/button/ButtonText";
import CardProfile from "@/components/common/card/CardProfile";
import IconBase from "@/components/common/icon/IconBase";
import { ICON_KEY } from "@/constants/keyConstants";

export default function Items() {
    return (
        <div className="px-4">
            <div className="mb-8">
                <div className="h-96 bg-slate-300" />
                <div className="border-b pl-1">
                    <CardProfile>
                        <p className="text-xs font-medium text-gray-500">
                            View profile &rarr;
                        </p>
                    </CardProfile>
                </div>
                <div className="mt-4">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Galaxy S50
                    </h1>
                    <p className="mt-3 text-3xl text-gray-900">$140</p>
                    <p className="my-6 text-base text-gray-700">
                        My money&apos;s in that office, right? If she start
                        giving me some bullshit about it ain&apos;t there, and
                        we got to go someplace else and get it, I&apos;m gonna
                        shoot you in the head then and there. Then I&apos;m
                        gonna shoot that bitch in the kneecaps, find out where
                        my goddamn money is. She gonna tell me too. Hey, look at
                        me when I&apos;m talking to you, motherfucker. You
                        listen: we go in there, and that ni**a Winston or
                        anybody else is in there, you the first motherfucker to
                        get shot. You understand?
                    </p>
                    <div className="flex items-center justify-between space-x-2">
                        <ButtonText label="Talk to seller" />
                        <button className="flex items-center justify-center rounded-md p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                            <IconBase iconKey={ICON_KEY.LIKE} />
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-gray-900">
                    Similar items
                </h2>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((_, i) => (
                        <div key={`similar-item-${i}`}>
                            <div className="mb-4 h-56 w-full bg-slate-300" />
                            <h3 className="-mb-1 text-gray-700">Galaxy S60</h3>
                            <p className="text-sm font-medium text-gray-900">
                                $6
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
