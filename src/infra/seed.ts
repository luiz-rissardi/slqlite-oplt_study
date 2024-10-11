import sqlite from "node:sqlite";
import SqlBricks from "sql-bricks";

const database = new sqlite.DatabaseSync("./src/db/db.sqlite");

export function seed(data) {
    database.exec(`
        DROP TABLE IF EXISTS students
      `);

    // Corrija a estrutura da tabela para refletir os campos reais
    database.exec(`
        CREATE TABLE students(
          id INTEGER PRIMARY KEY,
          nome TEXT NOT NULL,
          email TEXT NOT NULL,
          cpf TEXT NOT NULL
        ) STRICT
      `);

    insert(data)
}


export function insert(data = []) {
    const { text, values } = SqlBricks
    .insertInto("students",data)
    .toParams({
        placeholder:"?"
    })

    database.prepare(text).run(...values)
}

seed([
    {
        nome: "João Silva",
        email: "joao.silva@example.com",
        cpf: "123.456.789-00"
    },
    {
        nome: "Maria Oliveira",
        email: "maria.oliveira@example.com",
        cpf: "234.567.890-01"
    },
    {
        nome: "Carlos Souza",
        email: "carlos.souza@example.com",
        cpf: "345.678.901-02"
    },
    {
        nome: "Ana Pereira",
        email: "ana.pereira@example.com",
        cpf: "456.789.012-03"
    },
    {
        nome: "Lucas Santos",
        email: "lucas.santos@example.com",
        cpf: "567.890.123-04"
    },
    {
        nome: "Fernanda Lima",
        email: "fernanda.lima@example.com",
        cpf: "678.901.234-05"
    },
    {
        nome: "Ricardo Costa",
        email: "ricardo.costa@example.com",
        cpf: "789.012.345-06"
    },
    {
        nome: "Juliana Rocha",
        email: "juliana.rocha@example.com",
        cpf: "890.123.456-07"
    },
    {
        nome: "Roberto Martins",
        email: "roberto.martins@example.com",
        cpf: "901.234.567-08"
    },
    {
        nome: "Patrícia Alves",
        email: "patricia.alves@example.com",
        cpf: "012.345.678-09"
    }
])



