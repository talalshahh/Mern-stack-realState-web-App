import mongoose from "mongoose";
import dotenv from "dotenv";

export const dbConnection = () => {
	mongoose
		.connect(process.env.MONGODB_URI, {
			dbName: "real_state",
			useUnifiedTopology: true,
		})
		.then(() => console.log("Connected to MongoDB"))
		.catch((err) => console.error("Error connecting to MongoDB:", err));
};
