import express from "express"
import { connectToMondoDb } from "./src/config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";

const app = express()
const PORT = 8000

// middleware to parse request
app.use(express.json());

//Connect to Mongo Db
connectToMondoDb();

// Task Routes
app.use('/api/tasks', taskRouter)

// Start a server
app.listen(PORT, (error)=>{
error?
console.log("Error", error) :
console.log("Your server is running at http://localhost:" + PORT )
})