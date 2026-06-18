const express =  require("express");
const cors = require("cors");
const {dbConnect} = require("./config/db") ;
const { config } =require("dotenv");
const mongoose =  require("mongoose");
const authRoutes = require("./routes/auth.routes")
require('dotenv').config()

const app = express();

/* mongoose
        .connect('mongodb+srv://admin:1234ABCD@cluster0.upcwsbk.mongodb.net/?appName=Cluster0')
        .then(()=> console.log ("base de datos conectada"))
        .catch((error)=> console.log(error)) */

const PORT = process.env.PORT || 3000;
// const URL_BASE = process.env.URL_BASE;

app.use(express.json());
app.use(express.urlencoded());


dbConnect().catch((error) => { console.log(error) });
app.get ('/',(req,res)=>{
  res.json
    msg:"EduMarket"
})
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
