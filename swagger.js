const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Blagues Carambar',
      version: '1.0.0',
      description: 'Une API pour gérer et consulter des blagues Carambar',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Serveur local',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = { swaggerUi, swaggerSpec };
