import express from 'express';
import dotenv from 'dotenv';
import {productosRouters} from "./routers/index.ts";

dotenv.config({ path: "./src/.env" });

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Productos corriendo en puerto " + port);
});

app.use("/productos",productosRouters)

app.listen(port, () => {
    console.log("Servicio de Productos funcionando!", port);
});
 