const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

require('./database/connection')

require('./usuarios/models/usuario')

const router = require('./routes');
app.use(router);

app.listen(4300, () => {
    console.log('servidor rodando');
})
