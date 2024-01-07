// routes/reservation.js
const express = require('express');
const reservationController = require('../controllers/reservationController');
const authenticateToken = require('../middlewares/authMiddleware');

const router = express.Router();

router.use(authenticateToken); // Apply middleware to all reservation routes

router.get('/', reservationController.getAllReservations);
router.post('/make-reservation', reservationController.makeReservation);

module.exports = router;