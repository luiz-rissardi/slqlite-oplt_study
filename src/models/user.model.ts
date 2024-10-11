import { Inject } from "../decorators/inject.decorator.js";
import { NotificationContext } from "./notifications/notificationContext.js";


export class User {
    nome: string;
    email: string;
    cpf: string;

    @Inject(NotificationContext)
    private notificationContext:NotificationContext

    constructor(nome:string,email:string,cpf:string) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }

    isValid(){
        if(this.nome == ""){
            this.notificationContext.addNotification("name","the name is empty")
        }
        if(this.cpf == ""){
            this.notificationContext.addNotification("cpf","the cpf is empty")
        }
        if(this.email == ""){
            this.notificationContext.addNotification("email","the email is empty")
        }
    }
}
