"use client";
import { IAlert } from "@/types/Types";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";

const InfoAlert = ({
    info,
    message,
}: IAlert) => {
    return (
        <>
            <div className="flex flex-wrap gap-2">
                {[
                    ["Solid", "solid"],
                    ["Bordered", "bordered"],
                    ["Flat", "faded"],
                ].map((variant) => (
                    <Button
                        key={variant[0]}
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        variant={variant[1]}
                        onPress={() =>
                            addToast({
                                title: info,
                                description: message,
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-expect-error
                                variant: variant[0].toLowerCase(),
                                color: "secondary",
                            })
                        }
                    >
                        {variant[0]}
                    </Button>
                ))}
            </div>
        </>
    )
}

export default InfoAlert;