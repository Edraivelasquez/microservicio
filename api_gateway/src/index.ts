import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config({ path: "./src/.env" });

const app = express();
const port = process.env.PORT;
app.get("/productos", async (req, res) => {
    try { 
      const response = await axios.get("http://localhost:3001/productos/all"); 
      res.json(response.data);
    } catch (error) {
      console.error("Error al obtener productos:", error);
      res.status(500).send("Error al obtener productos");
    }
  });
  
  // Redirigir a usuarios
  app.get("/user", async (req, res) => {
    try {
      const response = await axios.get("http://localhost:3002/user/all");
      res.json(response.data); 
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).send("Error al obtener usuarios");
    }
  });

app.listen(port, () => {
    console.log("Servicio de API Gateway funcionando!", port);
});

