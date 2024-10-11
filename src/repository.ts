import sqlLite from "node:sqlite";
import SqlBricks from "sql-bricks";
import { User } from "./models/user.model.ts";



export class UserMysqlite {

    private database = new sqlLite.DatabaseSync("./src/db/db.sqlite");

    insertOne(user: User) {
        // Assegure que o objeto `user` tenha as propriedades corretas
        const { text, values } = SqlBricks
            .insertInto("students", user)
            .toParams({ placeholder: "?" });

        // Prepare e execute a inserção
        const insertStatement = this.database.prepare(text);
        insertStatement.run(...values); // Executa a inserção
    }


    selectAll() {
        const query = SqlBricks
            .select("*")
            .orderBy("nome")
            .from("students")
            .toString()
        return this.database.prepare(query).all()
    }
}

