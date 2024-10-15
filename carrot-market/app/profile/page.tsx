"use client";

import ButtonBase from "@/components/common/button/ButtonBase";
import CardProfile from "@/components/common/card/CardProfile";
import IconBase from "@/components/common/icon/IconBase";
import { ICON_KEY } from "@/constants/keyConstants";
import { TEXT } from "@/constants/styleConstants";
import { useRouter } from "next/navigation";

export default function Profile() {
    const router = useRouter();
    const goEdit = () => router.push("/profile/edit");
    const goBought = () => router.push("/profile/bought");
    const goLoved = () => router.push("/profile/loved");
    const goSold = () => router.push("/profile/sold");

    const point = 4;

    return (
        <div className="px-4">
            <CardProfile isLarge={true}>
                <span className="text-sm text-gray-700" onClick={goEdit}>
                    Edit profile &rarr;
                </span>
            </CardProfile>
            <div className="mt-8 flex justify-around">
                <div className="flex flex-col items-center" onClick={goSold}>
                    <ButtonBase iconKey={ICON_KEY.CURRENCY} />
                    <span className="mt-2 text-sm font-medium text-gray-700">
                        판매내역
                    </span>
                </div>
                <div className="flex flex-col items-center" onClick={goBought}>
                    <ButtonBase iconKey={ICON_KEY.SHOP} />
                    <span className="mt-2 text-sm font-medium text-gray-700">
                        구매내역
                    </span>
                </div>
                <div className="flex flex-col items-center" onClick={goLoved}>
                    <ButtonBase iconKey={ICON_KEY.LIKE} />
                    <span className="mt-2 text-sm font-medium text-gray-700">
                        관심목록
                    </span>
                </div>
            </div>
            <div className="mt-10">
                <CardProfile>
                    <div className="relative -left-0.5 flex">
                        {[...Array(5)].map((_, i) => {
                            const color =
                                point > i ? TEXT.COLOR.GOLD : TEXT.COLOR.SOFT;
                            return (
                                <IconBase
                                    key={`profile-icon-${i}`}
                                    iconKey={ICON_KEY.STAR}
                                    size={5}
                                    isFill={true}
                                    color={color}
                                />
                            );
                        })}
                    </div>
                </CardProfile>
                <div className="mt-1 text-sm text-gray-600">
                    <p>
                        Normally, both your asses would be dead as fucking fried
                        chicken, but you happen to pull this shit while I&apos;m
                        in a transitional period so I don&apos;t wanna kill you,
                        I wanna help you. But I can&apos;t give you this case,
                        it don&apos;t belong to me. Besides, I&apos;ve already
                        been through too much shit this morning over this case
                        to hand it over to your dumb ass.
                    </p>
                </div>
            </div>
        </div>
    );
}
