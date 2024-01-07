const db = require('../database');

db.run(`
    CREATE TABLE IF NOT EXISTS reservations (
        id INTEGER PRIMARY KEY,
        user_id INTEGER,
        book_id INTEGER,
        reservation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (book_id) REFERENCES books(id)
    )
`);

db.close();