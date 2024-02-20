import { Sequelize } from "sequelize";

const envData = process.env;

const sequelize = new Sequelize("todolist", "postgres", "54321", {
  host: "localhost",
  port: "5432",
  dialect: "postgres",
});

export const connectdb = async () => {
  try {
    await sequelize.authenticate();
    console.log("Db authenticate successfull.");
  } catch {
    console.log("DB connection successfull");
  }
};

export default sequelize