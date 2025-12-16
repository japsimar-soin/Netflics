import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
import aiRoutes from "./routes/ai.js";

const app = express();
const PORT = 3001;

app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST"],
	})
);

app.use(express.json());

app.get("/", (req, res) => {
	res.status(200).json({
		status: "OK",
		message: "AI backend running",
	});
});

app.use("/api/ai", aiRoutes);

app.use((req, res) => {
	res.status(404).json({
		error: "Route not found",
	});
});

app.use((err, req, res) => {
	console.error("Unhandled error:", err);
	res.status(500).json({
		error: "Internal server error",
	});
});

app.listen(PORT, () => {
	console.log(`🚀 AI backend running on port ${PORT}`);
});
