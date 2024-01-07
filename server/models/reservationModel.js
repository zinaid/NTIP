const db = require('../db/database');

class Reservation {
  static getAllReservations(callback) {
    db.all('SELECT * FROM reservations', callback);
  }

  static makeReservation(userId, bookId, callback) {
    db.run('INSERT INTO reservations (user_id, book_id) VALUES (?, ?)', [userId, bookId], callback);
  }
}

module.exports = Reservation;