const express = require("express");
const router = express.Router();

// Define a sample route
router.get("/", (req, res) => {
  res.send("Hello from API!");
});

module.exports = router; // ✅ This is important!
