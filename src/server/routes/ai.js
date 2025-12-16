// import express from "express";
// import { CohereClientV2 } from "cohere-ai";

// const router = express.Router();

// const cohere = new CohereClientV2();

// router.post("/recommend", async (req, res) => {
// 	console.log("➡️ /api/ai/recommend HIT");
// 	console.log("API key present:", !!process.env.COHERE_API_KEY);
//   console.log(
//     "COHERE_API_KEY length:",
//     process.env.COHERE_API_KEY?.length
//   );
// 	const { query } = req.body;

// 	if (!query) {
// 		console.log("❌ Missing query");
// 		return res.status(400).json({ error: "Query is required" });
// 	}

// 	try {
// 		const response = await cohere.chat({
// 			model: "command-a-03-2025",
// 			messages: [
// 				{
// 					role: "user",
// 					content: `
// You are a movie recommendation engine.

// Your task:
// - Read the user's query
// - Recommend exactly 5 relevant movies
// - Output ONLY a valid JSON array of movie titles
// - Do NOT include explanations, text, markdown, or formatting
// - The response MUST be directly parseable by JSON.parse()

// ### Examples

// User query: "romantic movies"
// Output:
// ["The Notebook", "La La Land", "Pride & Prejudice", "Before Sunrise", "Titanic"]

// User query: "sci fi movies"
// Output:
// ["Interstellar", "Arrival", "Blade Runner 2049", "The Matrix", "Dune"]

// User query: "thriller movies"
// Output:
// ["Se7en", "Gone Girl", "Prisoners", "Shutter Island", "Nightcrawler"]

// ### Now respond to this query

// User query: "${query}"

// Output:
// `,
// 				},
// 			],
// 		});

// 		const text = response.message?.content?.[0]?.text || "[]";

// 		if (!text) {
// 			return res.status(200).json({ movies: [] });
// 		}
// 		res.json({
// 			movies: JSON.parse(text),
// 		});
// 	} catch (error) {
// 		console.error("AI error:", error);
// 		res.status(500).json({
// 			error: "AI recommendation failed",
// 			movies: [],
// 		});
// 	}
// });

// export default router;

/* eslint-env node */
import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/recommend", async (req, res) => {
	// console.log("➡️ /api/ai/recommend HIT");

	const { query } = req.body;

	if (!query) {
		return res.status(400).json({ error: "Query is required", movies: [] });
	}

	try {
		const response = await fetch("https://api.cohere.com/v2/chat", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.COHERE_API_KEY}`,
			},
			body: JSON.stringify({
				model: "command-a-03-2025",
				messages: [
					{
						role: "user",
						content: `
You are a movie recommendation engine.

Your task:
- Read the user's query
- Recommend at most 15 relevant movies
- Output ONLY a valid JSON array of movie titles
- Do NOT include explanations, text, markdown, or formatting
- The response MUST be directly parseable by JSON.parse()

### Examples

User query: "romantic movies"
Output:
["The Notebook", "La La Land", "Pride & Prejudice", "Before Sunrise", "Titanic"]

User query: "sci fi movies"
Output:
["Interstellar", "Arrival", "Blade Runner 2049", "The Matrix", "Dune"]

User query: "thriller movies"
Output:
["Se7en", "Gone Girl", "Prisoners", "Shutter Island", "Nightcrawler"]

### Now respond to this query

User query: "${query}"

Output:
`,
					},
				],
			}),
		});

		if (!response.ok) {
			const errText = await response.text();
			console.error("Cohere HTTP error:", errText);
			throw new Error("Cohere request failed");
		}

		const data = await response.json();
		const rawText = data?.message?.content?.[0]?.text || "";

		let movies = [];
		const match = rawText.match(/\[[\s\S]*\]/);
		if (match) {
			movies = JSON.parse(match[0]);
		}

		return res.json({ movies });
	} catch (err) {
		console.error("AI error:", err);
		return res.status(500).json({
			error: "AI recommendation failed",
			movies: [],
		});
	}
});

export default router;
