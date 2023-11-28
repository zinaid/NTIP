// server/server.js
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();
const port = 3001;

const bookRoutes = require('./routes/books');

app.use(express.json());
app.use(cors());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/books', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
