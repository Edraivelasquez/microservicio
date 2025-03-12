import express from 'express';
import dotenv from 'dotenv';
import {userRouters} from "./routers/index";

dotenv.config({ path: "./src/.env" });

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("usuarios corriendo en puerto " + port);
});

app.use("/user",userRouters)

app.listen(port, () => {
    console.log("usuarios de Productos funcionando!", port);
});
 