const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "F1 Start Timer",
      version: "1.0.0",
      description:
        "Gère les users  grâce au CRUD et les timers grâce aux CRUD en fonction des users",
    },
  },
  apis: ["./routes/userRoute.js", "./routes/timerRoute.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
