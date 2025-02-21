export const getAllusuario = (req:any, res:any)=>{
    const data = [
        {
            "id": "1",
            "nombre": "Dr. Ana López",
            "especialidad": "Neurología"
        },
        {
            "id": "2",
            "nombre": "Dr. Juan Osorio",
            "especialidad": "Traumatologo"
        }
    ];

    res.status(200).json({
        mensaje : "bienvenido usuario",
        data: data
    })
}
