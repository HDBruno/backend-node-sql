require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { dbConnect } = require("./database/sql");
const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.json()); //middleware para parsear el body de los post

app.use(cors()); //cors

//importo el router y se lo asigno a una ruta.
const v1RouterIndex = require('./v1/routes/index');
const v1RouterLogin = require('./v1/routes/auth');
const v1RouterUsers = require('./v1/routes/users');
app.use('/api/v1', v1RouterIndex);
app.use('/api/v1', v1RouterLogin);
app.use('/api/v1', v1RouterUsers);

app.listen(PORT, () => {
    console.log(`Server listen in port ${PORT}...`)
});

dbConnect();