// server/server.js
const express = require('express');
const app = express();
const port = 3001;

const bookRoutes = require('./routes/books');

app.use(express.json());

app.use('/api/books', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
