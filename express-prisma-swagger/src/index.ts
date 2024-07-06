import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import Router from "./shared/routers/ping";
import ping from "./modules/module1/routers/ping";

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
app.use(ping);


app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
