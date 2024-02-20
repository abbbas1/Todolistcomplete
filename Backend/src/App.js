import "dotenv/config";
import express from "express";
import MainRoute from "./routes/mainRoute.js";
import { connectdb } from "./db/config.js";
import initDb from "./db/Init.js";

const app = express();
const envData = process.env;
app.use(express.json());
connectdb();

initDb()
  .then(() => console.log("DB synced"))
  .catch((error) => console.log("error in DB" + error));

app.use("/todo", MainRoute);

app.listen(envData.PORT, (err) => {
  if (!err) {
    console.log(`Server is listening at http://loclahost:${envData.PORT}`);
  } else {
    console.log("Server crashed.");
  }
});
