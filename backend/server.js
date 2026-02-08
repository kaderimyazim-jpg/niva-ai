const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// TEST ENDPOINT
app.get("/", (req, res) => {
  res.json({
    status: "OK",
    message: "NIVA backend çalışıyor",
  });
});

// AI PLACEHOLDER (KEY YOK)
app.post("/ai", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "prompt gerekli" });
  }

  // Şimdilik sahte cevap
  res.json({
    output: `NIVA aldı: ${prompt}`,
  });
});

app.listen(PORT, () => {
  console.log(`NIVA backend ${PORT} portunda`);
});
