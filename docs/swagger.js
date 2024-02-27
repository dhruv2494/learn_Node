const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Nodejs crud",
      version: "1.0.0",
      description: "Learning nodejs",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    //   servers: [
    //     {
    //       url: "http://192.168.1.100:2000",
    //     },
    //   ],
  },
  apis: ["./docs/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
