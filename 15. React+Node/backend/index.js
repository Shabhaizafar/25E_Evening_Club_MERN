const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors()); // allow cross-origin requests
app.use(express.json()); // parse JSON

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Node.js backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
