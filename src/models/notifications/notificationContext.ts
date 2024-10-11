

class Notification {
    message: string;
    name: string;

    constructor(name: string, message: string) {
        this.message = message;
        this.name = name;
    }
}

export class NotificationContext {

    private notifications: Notification[] = [];

    addNotification(name:string,message:string){
        this.notifications.push({name,message});
    }

    hasNotification(){
        return this.notifications.length > 0;
    }
}