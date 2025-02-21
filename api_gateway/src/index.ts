import express from 'express';
import dotenv from 'dotenv';

dotenv.config({ path: "./src/.env" });

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    res.send("API Gateway corriendo en puerto " + port);
});

app.listen(port, () => {
    console.log("Servicio de API Gateway funcionando!", port);
});

