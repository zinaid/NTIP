const Reservation = require('../models/reservationModel');

const reservationController = {
  getAllReservations: (req, res) => {
    Reservation.getAllReservations((err, reservations) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching reservations.' });
      }
      res.status(200).json(reservations);
    });
  },

  makeReservation: (req, res) => {
    const { bookId } = req.body;
    userId = req.user.id;
    Reservation.makeReservation(userId, bookId, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error making reservation.' });
      }
      res.status(201).json({ message: 'Reservation made successfully.' });
    });
  },
};

module.exports = reservationController;