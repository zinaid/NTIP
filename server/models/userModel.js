const db = require('../db/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../config'); // Your secret key

 // Helper method to generate a JWT token
function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
}

class User {
    static register(user, callback) {
        const { username, password } = user;
      
        bcrypt.hash(password, 10, (err, hashedPassword) => {
          if (err) {
            return callback(err);
          }
      
          // Use an arrow function to ensure the correct 'this' context
          db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], function (err) {
            if (err) {
              return callback(err);
            }
      
            // Generate and return the JWT token after registration
            const token = generateToken({ id: this.lastID, username });
            callback(null, { id: this.lastID, username, token });
          });
        });
      }

      static login(username, password, callback) {
        db.get('SELECT * FROM users WHERE username = ?', [username], (err, user) => {
          if (err) {
            return callback(err);
          }
          
          if (!user) {
            return callback(null, null); // User not found
          }
    
          bcrypt.compare(password, user.password, (err, match) => {
            if (err) {
              return callback(err);
            }
            if (!match) {
              return callback(null, null); // Incorrect password
            }
    
            // Passwords match, generate and return the JWT token
            const token = generateToken(user);
            callback(null, { id: user.id, username, token });
          });
        });
      }

    static getById(id, callback) {
        db.get('SELECT id, username FROM users WHERE id = ?', [id], callback);
    }

    // Helper method to verify and decode a JWT token
    static verifyToken(token) {
        try {
        const decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
        } catch (error) {
        return null; // Token is invalid
        }
    }
}

module.exports = User;
