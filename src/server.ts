import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
require("dotenv").config();
const app: Application = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const corsOptionsDelegate = (req: any, callback: any) => {
  let corsOptions = {
    credentials: true,
    origin: req.header("Origin"),
  };
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));

//Importamos las rutas de la api
import apiRouter from "./api";
const PORT = process.env.PORT || 8080;
app.use("/api", apiRouter);

app.listen(PORT, () => {
  //console.log(`server started at http://localhost:${PORT}`);
});

export default app;
