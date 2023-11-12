// server/server.js
const express = require('express');
const app = express();
const port = 3001; // Choose any available port

app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});