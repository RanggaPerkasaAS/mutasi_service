const express = require("express");
const cors = require("cors")
const app = express();

app.use(cors());

const mutasi = require("./routers/mutasi")
app.use("/api",mutasi)

app.listen(8001,()=>{
    console.log("server mutasi run in port 8001");
})