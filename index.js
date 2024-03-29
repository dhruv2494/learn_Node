const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected!"))
  .catch((e) => console.log(e));

const userRoute = require("./src/routes/userRoutes");
const swaggerSpec = require("./docs/swagger");
const swaggerUi = require("swagger-ui-express");
const authRoute = require("./src/routes/authRoutes");
const verifyToken = require("./src/middlewares/authentication");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("Home");
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  })
);

app.use("/auth", authRoute);
app.use("/user", verifyToken, userRoute);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
