import { initalizeTracing } from './tracing.js';

await initalizeTracing();


import http from "http"
import express, { Router } from "express";
import bodyParser from "body-parser";
import { UserService } from "../service/service.ts";
const service = new UserService()

const app = express();
app.use(bodyParser.json());

const server = http.createServer(app)
const routes = getRoutes()
app.use("/api", routes)

server.listen(3000, () => {
    console.log(`the server is running at port ${server.address()["port"]}`);
})


function getRoutes() {
    const router = Router();

    router.route("/users")
        .get((req, res) => {
            const result = service.getAll();
            res.write(JSON.stringify(result));
            res.end();
        })
        .post((req, res) => {
            const body = req.body;
            const result = service.insertOne(body);
            res.write(JSON.stringify(result));
            res.end("ola");
        })

    return router;
}