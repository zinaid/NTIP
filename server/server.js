// server/server.js
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();
const port = 3001;

const bookRoutes = require('./routes/books');
const reservationRoutes = require('./routes/reservations');
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use(cors());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/books', bookRoutes);
app.use('/api/reservations', reservationRoutes);
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
