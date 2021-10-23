import path from "path";
import express from "express";

import api from "./server/routes";
import connectDB from "./server/utils/db";


const app = express();
const port = process.env.PORT || 8000;

const startApp = async () => {
  await connectDB(process.env.DB_URL);

  app.use(express.json());

  app.use("/api", api);
  app.use("*", express.static(path.join(__dirname, 'web/public')));

  app.listen(port, () => {
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
  });
}

export default startApp;
