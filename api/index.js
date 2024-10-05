import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import { dbConnection } from "./db/dbConnection.js";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.route.js";
import path from "path";
import cors from "cors"; // Missing import

dotenv.config();

const app = express();
app.use(
	cors({
		origin: ["http://localhost:5173"],
		methods: ["POST", "GET"],
		credentials: true,
	})
);
app.use(express.json());

dbConnection();

app.use(cookieParser());

app.listen(3000, () => {
	console.log("Server is running on Port 3000!!");
});
app.get("/", (req, res) => {
	res.json("Hello");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

// Remove or fix this incorrect usage
// app.length("/", (req, res) => {});

// Uncomment for deployment
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, "/client/dist")));
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

app.use((err, req, res, next) => {
	const statusCode = err.statusCode || 500;
	const message = err.message || "Internal Server Error";

	return res.status(statusCode).json({
		success: false,
		statusCode,
		message,
	});
});
