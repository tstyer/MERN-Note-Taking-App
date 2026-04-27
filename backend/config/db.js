// Here I create a function to connect to the database using mongoose

import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
        // process.exit just means to exit if it fails, but the '1' i the status code for failure. '0' means success.
    };
};