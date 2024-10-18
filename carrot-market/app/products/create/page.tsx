"use client";

import ButtonText from "@/components/common/button/ButtonText";
import IconBase from "@/components/common/icon/IconBase";
import InputBox from "@/components/common/input/InputBox";
import InputPrice from "@/components/common/input/InputPrice";
import InputText from "@/components/common/input/InputText";
import { ICON_KEY } from "@/constants/keyConstants";
import useMutation from "@/libs/client/hooks/useMutation";
import { useForm } from "react-hook-form";

interface CreateProductForm {
    name: string;
    price: number;
    description: string;
    image?: string;
}

export default function CreateProduct() {
    const { register, handleSubmit } = useForm<CreateProductForm>();
    const [createProduct] = useMutation("/api/products");
    const onValid = (data: CreateProductForm) => createProduct(data);

    return (
        <div className="space-y-5 px-4 py-4">
            <form onSubmit={handleSubmit(onValid)}>
                <div className="mb-5">
                    <label className="flex h-48 w-full items-center justify-center rounded-md border-2 border-dashed border-gray-300 py-6 text-gray-600 hover:border-orange-500 hover:text-orange-500">
                        <IconBase
                            iconKey={ICON_KEY.IMAGE}
                            size={12}
                            strokeWidth={1}
                        />
                        <input className="hidden" type="file" />
                    </label>
                </div>
                <InputText register={register("name")} label="Name" />
                <InputPrice register={register("price")} />
                <InputBox
                    register={register("description")}
                    label="Description"
                />
                <ButtonText label="Upload item" />
            </form>
        </div>
    );
}
