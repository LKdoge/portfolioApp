
export interface IAlert {
    title: string;
    error?: string,
    message: string,
    alertType: IAlertType,
}

export enum IAlertType {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
}