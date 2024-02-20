import "dotenv/config";
import express from "express";
import Session from "express-session";
import SequelizeStore from "connect-session-sequelize";
import MainRoute from "./routes/mainRoute.js";
import sequelize ,{ connectdb } from "./db/config.js";
import initDb from "./db/Init.js";

const app = express();
const envData = process.env;
app.use(express.json());
connectdb();

const mySequelizeStore = SequelizeStore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});
// console;
app.use(
  Session({
    secret: envData.SESSION_SECRET,
    store: mySequelizeStore1,
    saveUninitialized: true,
    resave: false,
    proxy: true,
  })
);
mySequelizeStore1.sync();

initDb()
  .then(() => console.log("DB synced"))
  .catch((error) => console.log("error in DB" + error));

app.use("/", MainRoute);

app.listen(envData.PORT, (err) => {
  if (!err) {
    console.log(`Server is listening at http://loclahost:${envData.PORT}`);
  } else {
    console.log("Server crashed.");
  }
});
