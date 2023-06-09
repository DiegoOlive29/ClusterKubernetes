import "reflect-metadata";
import express from "express";
import errorMiddlewares from "./middlewares/errors.middlewares";
import userRouters from "./routers/users.routes";
import sessionRoutes from "../src/routers/login.routes";

const app = express()

app.use(express.json())

app.use("/users", userRouters);
app.use("/login", sessionRoutes);

app.listen(3000,() =>{
    console.log("server runnig in port 3000")
})