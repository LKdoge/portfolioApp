"use client";
import { IAlert, IAlertType } from "@/types/Types";
import { addToast } from "@heroui/toast";
import { Button } from "@heroui/button";

const Alert = ({
    title,
    message,
    alertType,
}: IAlert) => {
    const styles = {
        [IAlertType.INFO]: {
            style: ["Solid", "solid"],
            variant: ["Solid", "solid"]
        },
        [IAlertType.SUCCESS]: {
            style: ["Bordered", "bordered"],
            variant: ["Bordered", "bordered"]
        },
        [IAlertType.WARNING]: {
            style: ["Flat", "faded"],
            variant: ["Flat", "faded"]
        }
    };

    return (
        <>
            <div className="flex flex-wrap gap-2">
                <Button
                    key={styles[alertType].style[0]}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    variant={styles[alertType].style[1]}
                    onPress={() =>
                        addToast({
                            title: title,
                            description: message,
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-expect-error
                            variant: variant[0].toLowerCase(),
                            color: "secondary",
                        })
                    }
                >
                    {styles[alertType].style[0]}
                </Button>
            </div>
        </>
    )
}

export default Alert;