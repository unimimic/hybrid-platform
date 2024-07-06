import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import { dataSource } from "./appDataSource"

import Router from "./routers/ping";
import userRouter from "./routers/userRouter";

// establish database connection
dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(Router);
app.use(userRouter);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
