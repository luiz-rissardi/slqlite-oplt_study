import { Inject } from "../decorators/inject.decorator.ts";
import { User } from "../models/user.model.ts";
import { UserMysqlite } from "../repository.ts";


export class UserService {

    @Inject(UserMysqlite)
    private repository: UserMysqlite;

    getAll() {
        return this.repository.selectAll()
    }

    insertOne(user: User) {
        this.repository.insertOne(user);
        return user;
    }
}