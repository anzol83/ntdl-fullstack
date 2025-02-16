// This file is used to connect API with Db

import mongoose from "mongoose";

const DATABASE_NAME = 'ntdl-db'
const CONNECTION_URI = 'mongodb://localhost:27017/' + DATABASE_NAME

export const connectToMondoDb = () => {
    try {
        const connect = mongoose.connect(CONNECTION_URI)

        if(connect) {
            console.log("Database connected at", CONNECTION_URI);
        }
    } catch (error) {
        console.log("Db connection Error", error);
    }
}