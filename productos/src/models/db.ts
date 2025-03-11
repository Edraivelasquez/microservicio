import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "Edrai",
    password: "12345",
    database: "productos_db",
});


pool
    .query("SELECT 1")
    .then(() => console.log("✅ Conectado a MySQL"))
    .catch((err: any) => {
        console.error("❌ Error al conectar a MySQL:", err);
    });


