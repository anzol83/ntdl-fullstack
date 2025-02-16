import express from "express"
import { connectToMondoDb } from "./config/dbConfig";

const app = express()
const PORT = 8000

// middleware to parse request
app.use(express.json());

//Connect to Mongo Db
connectToMondoDb();

// Start a server
app.listen(PORT, (error)=>{
error?
console.log("Error", error) :
console.log("Your server is running at http://localhost:" + PORT )
})