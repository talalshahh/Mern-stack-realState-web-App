import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import { dbConnection } from "./db/dbConnection.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
import cors from "cors";
import path from "path"; // Path module is still useful

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Use dynamic port

app.use(express.json());
app.use(cookieParser());
app.use(cors()); // Allow cross-origin requests (important for Vercel)

dbConnection();

// Serve static files in production if needed (only if backend is serving frontend)
if (process.env.NODE_ENV === "production") {
	const __dirname = path.resolve(); // Get the current directory
	app.use(express.static(path.join(__dirname, "/frontend/dist"))); // Serve static files from frontend

	// If no other routes match, serve the frontend's index.html file
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// Basic routes
app.get("/", (req, res) => {
	res.json("Hello from the backend!");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Error handling middleware
app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";
	return res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on Port ${PORT}`);
});
