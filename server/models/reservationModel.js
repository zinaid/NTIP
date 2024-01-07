const db = require('../db/database');

class Reservation {
  static getAllReservations(callback) {
    db.all('SELECT reservations.*, books.title  FROM reservations INNER JOIN books ON reservations.book_id = books.id', callback);
  }

  static makeReservation(userId, bookId, callback) {
    db.run('INSERT INTO reservations (user_id, book_id) VALUES (?, ?)', [userId, bookId], callback);
  }
}

module.exports = Reservation;