export interface RootState {}

export interface INotificationState {
    isOpen: boolean;
    message: string;
    color: string;
    keepNotificationOpen: boolean;
}

export interface INotificationRequest {
    message: string;
    color: string;
    keepNotificationOpen?: boolean;
}