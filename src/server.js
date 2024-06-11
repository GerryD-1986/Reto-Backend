const cors = require("cors");
const express = require('express');
const usersRouter = require("./routes/user.routes");
const authRouter = require("./routes/auth.router");
const albumRouter = require("./routes/album.router");
const ordenRouter = require("./routes/orden.router");

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use("/users",usersRouter);
app.use("/auth", authRouter);
app.use("/album", albumRouter);
app.use("/orden", ordenRouter);

app.get('/', (request, response)=>{
    response.json({
        message: "Koders APIv2",
    });
});

module.exports = app;