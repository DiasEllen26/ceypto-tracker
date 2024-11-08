import express from "express";
import cryptoTracker from "./cryptoTracker.js";

const app = express();

const port = 3000;

app.get("/api/cryptotracker", async (req, res) => {
  try {
    const dataCrypto = await cryptoTracker();
    res.json({value: dataCrypto});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})