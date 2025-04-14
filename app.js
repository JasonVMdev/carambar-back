const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const blaguesRoutes = require('./routes/blaguesRoutes');
require('./models'); 

const app = express();

app.use(cors({
    origin: 'https://jasonvmdev.github.io'
  }));
app.use(bodyParser.json());

app.use('/blagues', blaguesRoutes);

module.exports = app;

const { swaggerUi, swaggerSpec } = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
