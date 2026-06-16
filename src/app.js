import express from "express";
import cors from "cors";

import "dotenv/config";



const app = express();
const PORT = process.env.PORT || 3000;
const URL_BASE = process.env.URL_BASE;

app.use(express.json());
app.use(express.urlencoded());

dbConnect().catch((error) => { console.log(error) });


app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
