import express from "express"
import cors from "cors"
import { connectToMondoDb } from "./src/config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";

const app = express()
const PORT = 3000

// middleware to parse request
app.use(express.json());

//Define config for CORS
const corsOption = {
    credentials: true, 
    origin: true // is an array with the list of whitelisted domain
}
app.use(cors(corsOption))

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