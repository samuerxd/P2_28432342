const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo! "+"Nombre: Samuel Aguana "+"Cedula: 28432342 "+"Seccion: 3")
});

app.listen(3000, () =>{
    console.log("server running on port", 3000);
});