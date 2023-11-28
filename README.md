# FULLSTACK TUTORIAL

Technologies used:

* REACT.JS
* NODE.JS (EXPRESS LIBRARY)
* SQLITE
* GIT
* DOCKER

What we cover:

* Copying Figma desing with React.js
* Using Git and Github through development cycle
* API development for backend
* Docker
* App deployment

We will create two subfolder:

* client
* server

Client will be used for our frontend app - React app.

Server will be used 
for our backend API - Node.js with Express library.

# CLIENT

Inside a client folder we will install react application.

```js
npx create-react-app .
```

App structure is as follows:

* node_modules
* public
  * favicon.ico
  * index.html
  * logo.png
  * manifest.json
  * robots.txt
* src
  * App.css
  * App.js
  * App.test.js
  * index.css
  * index.js
  * logo.svg
  * reportWebVitals.js
  * setupTest.js
* .gitignore
* package-lock.json
* package.json
* README.md

We will delete following files:

App.test.js, reportWebVitals.js, setupTests.js, logo.svg, App.css, index.css and modify the other files to not include those files, and modify it's content.

Inside src we will have only:

App.js

```js
function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
```

index.js

```
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Application is started using: ```npm start```.

We want to use Tailwindcss for our design. We will install tailwind inside client folder with a command: ```npm install tailwindcss``` and we will generate tailwind settings file with ```npx tailwindcss init```. This will generate tailwind.config.js file. Modify it:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Next we will import tailwind classes by creating a file style.css inside client/src folder. 

style.css

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

Styles will be imported inside index.js:

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Import your CSS here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Now we can use tailwindcss classes inside our components. For now we have only one component named App.js. Inside App.js we will include all our other components.

Example:

```js
function App() {
  return (
    <div className="App bg-red-800">
      TEST
    </div>
  );
}

export default App;
```

Now that we have our core frontend app set with Tailwind as a css framework. We can go and copy some desing.

## Creating components

We will create a folder inside src named components. Inside that folder we will add our web app components. First we will start by creating some layout. We will create components body, header, and footer.

Inside components add folder body, header, and footer, and in each of them add files Body.js, Header.js and Footer.js, respectively.

The main syntax of the components is as follows:

```js
function Body() {
  return (
      <div>
         BODY
      </div>
  );
}

export default Body;
```

Repeat that for all other components (be carefull how you name them).

We can include components into another component. All of our layout components will be added to the main component APp.js.

```js
// App.js
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';

function App() {
  return (
    <div>
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}

export default App;

```

Next we will style our layout. Let us start with the App.js. We will use Tailwindcss instead of the plain CSS (but through tutorial we will show how we would do it using the plain CSS).

We want to achieve that our app has full height, and that their components are in seperate rows. We will use CSS flex grid system to achieve that.
```js
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Body/>
      <Footer />
    </div>
  );
}
```

Next, we want our header to have full width and be fixed to the top.

```js
function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <h1 className="text-white text-2xl font-bold">Napredne tehnike internet programiranja</h1>
      </div>
    </header>
  );
}
```

As for our Footer we want it to be full width and fixed to the bottom.

```js
function Footer() {
  return (
    <footer className="bg-blue-500 p-4 b-0">
      <div className="w-full text-center">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} Tutorijal
        </p>
      </div>
    </footer>
  );
}
```

As for the body, we want it to strech over the whole screen and have full width.

```js
function Body() {
  return (
      <div className="flex flex-grow items-center justify-center p-4 w-full h-full">
      </div>
  );
}
```

## PAGES

For start we want to have three pages: Login, Register and Dashboard. To distinct our components from opur pages we will create folder pages and create subfolders: login, register and dashboard.

```js
function Login() {
    return (
      <div>
        LOGIN
      </div>
    );
  }
  
  export default Login;
```

```js
function Register() {
    return (
      <div>
        REGISTER
      </div>
    );
  }
  
  export default Register;
```

and
```js
function Dashboard() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
  
  export default Dashboard;
```

We will solve routing. React mainly uses react-router library for routing. Now, we will install react-router.

```js
npm install react-router-dom
```
For clarity we will create folder inside src named Routes and a file named routesList.js. Inside we will list all our routes.

```js
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Dashboard from '../pages/dashboard/Dashboard'
import Body from '../components/body/Body'

function RoutesList() {
  return (
      <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      </Routes>
  );
}

export default RoutesList;
```

Now we will include our component inside App.js and we can create links that will redirect us to those components.

```js
// App.js
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesList from './routes/routesList'; 

function App() {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <RoutesList />
        <Footer />
    </div>
  );
}

export default App;
```

So that we can use routes through all our app we will modify index.js

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Import your CSS here
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
```

Inside Body component we will include <Outlet> because we want to render all our pages inside a Body component.

```js
import { Outlet } from "react-router-dom";

function Body() {
  return (
      <div className="flex flex-grow items-center justify-center p-4 w-full h-full">
        <Outlet />
      </div>
  );
}

export default Body;
```

Let us test our routing.

```js
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-500 p-4">
      <div className="flex flex-row mx-auto">
        <Link to="/" className="text-white text-2xl font-bold w-full">Napredne tehnike internet programiranja</Link>
        <div className="flex justify-end font-bold text-white w-full">
          <Link to="/login" className="mr-2">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
```

We added three links, and modified our design a little bit so we get two links, Login and Register to the right side of the header.

## PROTECTING ROUTES

We will use useState() hook to implement auth logic on frontent. We want to achieve that our application doesn't allow opening dashboard if a user is authenticated. If a user is not authenticated we will open Login component.

In our App.js we will create a general auth variable/state that will hold information about authenticated user.

```js
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import RoutesList from './routes/routesList';

import { useState } from 'react';

function App() {
  const [auth, setAuth] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
        <Header auth={auth} setAuth={setAuth} />
        <RoutesList auth={auth} setAuth={setAuth} />
        <Footer />
    </div>
  );
}

export default App;
```

As you may see we used useState hook and created variable auth and setAuth function that is used for setting the state of a variable auth. Initially it is set to false.

Component Header recieves auth and setAuth as props. With that information we render different Header.

```js
import {Link, useNavigate} from 'react-router-dom';

function Header({auth, setAuth}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/login');
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="flex flex-row mx-auto">
        <Link to="/" className="text-white text-2xl font-bold w-full">Napredne tehnike internet programiranja</Link>
        <div className="flex justify-end font-bold text-white w-full">
          {!auth ? (
          <>
          <Link to="/login" className="mr-2">Login</Link>
          <Link to="/register">Register</Link>
          </>) : (
            <Link to="/logout" onClick={handleLogout} className="mr-2">Logout</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
```

Here we introduce useNavigate hook that takes us to the desired url. Here we render Login and Register link if the user is not authenticated, else it shows Logout that has onClick function handleLogout also defined in this component.

Next in our routesList.js component.

```js
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Dashboard from '../pages/dashboard/Dashboard'
import Body from '../components/body/Body'

function RoutesList({auth, setAuth}) {
  
  return (
      <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={auth ? <Dashboard /> : <Login setAuth={setAuth} />} />
        <Route path="login" element={<Login setAuth={setAuth} />} />
        <Route path="logout" element={<Login setAuth={setAuth} />} />
        <Route path="register" element={<Register />} />
      </Route>
      </Routes>
  );
}

export default RoutesList;
```

This component also recieves auth and setAuth and it displays Dashboard if a user is authenticated else it displays Login. Inside a login component we handle the logic for authenticating user.

```js
import { useNavigate } from 'react-router-dom';

function Login({setAuth}) {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      setAuth(true);
      navigate('/');
    }

    return (
      <div className="flex flex-col justify-center items-center p-4 min-w-[600px]">
        <h1 className="text-2xl">LOGIN</h1>
        <form onSubmit={handleSubmit} id="login_form" className="w-full">
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Username</label>
            <input className="border-2 bg-gray-100" name="username" placeholder ="Username" type="text" />
          </div>
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Password</label>
            <input className="border-2 bg-gray-100" name="password" placeholder="Password" type="password" />
          </div>
          <div className="p-2 flex flex-col">
            <button type="submit" className="w-full bg-green-500 text-white text-xl p-2">Login</button>
          </div>
        </form>
      </div>
    );
  }
  
export default Login;
```

Also we have modified login design. As for the register design it is as follows.

```js
function Register() {
    return (
      <div className="flex flex-col justify-center items-center p-4 min-w-[600px]">
        <h1 className="text-2xl">REGISTER</h1>
        <form action="#" method="POST" id="register_form" className="w-full">
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Name</label>
            <input className="border-2 bg-gray-100" name="username" placeholder ="Username" type="text" />
          </div>
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Lastname</label>
            <input className="border-2 bg-gray-100" name="username" placeholder ="Username" type="text" />
          </div>
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Username</label>
            <input className="border-2 bg-gray-100" name="username" placeholder ="Username" type="text" />
          </div>
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Password</label>
            <input className="border-2 bg-gray-100" name="password" placeholder="Password" type="password" />
          </div>
          <div className="p-2 flex flex-col">
            <label className="text-gray-500">Confirm password</label>
            <input className="border-2 bg-gray-100" name="confirm_password" placeholder="Password" type="password" />
          </div>
          <div className="p-2 flex flex-col">
            <button type="submit" for="register_form" className="w-full bg-green-500 text-white text-xl p-2">Login</button>
          </div>
        </form>
      </div>
    )
  }

  export default Register;
```

## LIST, ADD AND EDIT VIEWS

In this part we will create two new pages that lead us to the the "books" and "reservations".

Modify Header.js.

```js
import {Link, useNavigate} from 'react-router-dom';

function Header({auth, setAuth}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(false);
    navigate('/login');
  };

  return (
    <header className="bg-blue-500 p-4">
      <div className="flex flex-row mx-auto">
        <Link to="/" className="text-white text-2xl font-bold w-full">NTIP</Link>
        <div>
          <Link to="/books" className="text-white w-full mr-2">Knjige</Link>
          <Link to="/reservations" className="text-white w-full">Rezervacije</Link>
        </div>
        <div className="flex justify-end font-bold text-white w-full">
          {!auth ? (
          <>
          <Link to="/login" className="mr-2">Login</Link>
          <Link to="/register">Register</Link>
          </>) : (
            <Link to="/logout" onClick={handleLogout} className="mr-2">Logout</Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
```

Add those links to routesList.js and create those pages inside pages folder and name them Books.js and Reservations.js (create subfolder for them also).

```js
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Dashboard from '../pages/dashboard/Dashboard'
import Reservations from '../pages/reservations/Reservations'
import Books from '../pages/books/Books'
import Body from '../components/body/Body'

function RoutesList({auth, setAuth}) {
  
  return (
      <Routes>
      <Route path="/" element={<Body />}>
        <Route index element={auth ? <Dashboard /> : <Login setAuth={setAuth} />} />
        <Route path="login" element={<Login setAuth={setAuth} />} />
        <Route path="logout" element={<Login setAuth={setAuth} />} />
        <Route path="register" element={<Register />} />
        <Route path="books" element={<Books />} />
        <Route path="reservations" element={<Reservations />} />
      </Route>
      </Routes>
  );
}

export default RoutesList;
```

Now we have views for Login, Register, Dashboard, Books and Reservations. Our goal is to render books inside our Books.js component and reservations inside our Reservations.js component. But for the start we will hardcode some examples inside Books.js.

```js
import Book from './Book'

function Books() {
    // Dummy data
    const books = [
        {
        id: 1,
        title: 'Book Title 1',
        author: 'Author 1',
        description: 'Description of Book 1...',
        },
        {
        id: 2,
        title: 'Book Title 2',
        author: 'Author 2',
        description: 'Description of Book 2...',
        },
    ];

    return (
        <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Lista knjiga</h1>

        {books.map((book) => (
            <Book key={book.id} {...book} />
        ))}
        </div>
    );
}
  
export default Books
```

As you notice inside Books.js we render Book.js component that will showcase one book and we will prop values to here from the array data.

```js
import React from 'react';

function Book ({ title, author, description }) {
  return (
    <div className="bg-gray-200 shadow-md p-4 mb-4 rounded-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{author}</p>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export default Book;
```

## SERVER

Now that we have our frontend mainly finished (except for the part of data retrievel and form submissions) we will proceed to setup our backend part inside server component. Leave the client folder and enter server folder and initialize project.

```
npm init -y
```

Now install express and nodemon (this will restart our server automatically when we change something).

```
npm install express nodemon
```

Now inside server folder create server.js file.

```js
// server/server.js
const express = require('express');
const app = express();
const port = 3001; // Choose any available port

app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

Inside package.json add start scripts

```js
{
  "scripts": {
    "start": "nodemon server.js"
  }
}
```

Now our application is run with a command:

```nodemon server.js```

Next we will connect our app to a SQLite database. First install ```npm install sqlite3```. For clarity purposes create folder db where we will add our database connection.

```js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('books.db', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

module.exports = db;
```

Next we will import database connection inside server.js.

```js
// server/server.js
const express = require('express');
const app = express();
const port = 3001; // Choose any available port

const db = require('./db/database');

app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

Next we will add scripts that we will use for scheme generation (some kind of migrations). Add schemes folder inside db and inside add bookScheme.js.

```js
const db = require('../database');

db.run(`
  CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY,
    title TEXT,
    author TEXT,
    description TEXT
  )
`);

db.close();
```

This script can be run as ```node db/schemes/bookScheme.js```. This will create a table books with abovementioned columns. (TIP: Install sqlite extension for VS code)

Now that we have connection to a db, a db and table books we can go and create our API. We want to introduce MVC model inside our app. Our views are already our frontend app. Now we need to create Model and Controller.

## MVC architecture

Create folders models, controllers and routes. Inside our models we will have interaction with database. Our controller will handle all logic and routes will redirect us to the controllers.

### Routes

Inside our routes we will create books.js file.

```js
const express = require('express');

const router = express.Router();

router.get('/',  function(req, res) {
    console.log("Books get");
});

module.exports = router;
```

In server.js we will include routes.

```js
// server/server.js
const express = require('express');
const app = express();
const port = 3001;

const db = require('./db/database');
const bookRoutes = require('./routes/books');

app.use(express.json());

app.use('/api/books', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

Now we have our first route and if we visit localhost:3001/api/books we will se console.log message in our terminal.
Next we want to connect our route to our controller. Let's create controller bookController.js.

```js
const bookController = {
  getAllBooks: (req, res) => {
    res.json("SSS");
  }
};

module.exports = bookController;
```

Let us change routes to take us to the bookController.

```js
const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookController.getAllBooks);

module.exports = router;
```

Now if go in browser to the route localhost:3001/api/books we will see a message written.

As for the final part we will connect to the model. Create a file inside folder models named bookModel.js.

```js
const db = require('../db/database');

class Book {
  static getAll() {
    console.log("SSS"); 
  }
}

module.exports = Book;
```

Now we can remove the connection to the database from server.js because our connection is inside our models. Change the controller file bookController.js to use model.

```js
const Book = require('../models/bookModel');

const bookController = {
  getAllBooks: (req, res) => {
    Book.getAll();
  }
};

module.exports = bookController;
```

### API

Now we will write our API endpoints. We will write these endpoints:

```
GET --> books
GET --> books/{id}
POST --> books
PUT --> books/{id}
DELETE --> books/{id}
```

Let us modify our routes.

```js
const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
```

Next, let us modify our bookController.js.

```js
// server/controllers/bookController.js
const Book = require('../models/bookModel');

const bookController = {
  getAllBooks: (req, res) => {
    Book.getAll((err, books) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching books.' });
      }
      res.json(books);
    });
  },

  getBookById: (req, res) => {
    const bookId = req.params.id;
    Book.getById(bookId, (err, book) => {
      if (err) {
        return res.status(500).json({ error: 'Error fetching book from the database.' });
      }
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(book);
    });
  },

  createBook: (req, res) => {
    const newBook = req.body;
    Book.create(newBook, (err, createdBook) => {
      if (err) {
        return res.status(500).json({ error: 'Error adding book to the database.' });
      }
      res.status(201).json(createdBook);
    });
  },

  updateBook: (req, res) => {
    const bookId = req.params.id;
    const updatedBook = req.body;
    Book.update(bookId, updatedBook, (err, updated) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating book in the database.' });
      }
      if (!updated) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(updated);
    });
  },

  deleteBook: (req, res) => {
    const bookId = req.params.id;
    Book.delete(bookId, (err, deletedBook) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting book from the database.' });
      }
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(deletedBook);
    });
  },
};

module.exports = bookController;
```

Next modify our bookModel.js that talks with a database.

```js
// server/models/bookModel.js
const db = require('../db/database');

class Book {
  static getAll(callback) {
    db.all('SELECT * FROM books', callback);
  }

  static getById(id, callback) {
    db.get('SELECT * FROM books WHERE id = ?', [id], callback);
  }

  static create(book, callback) {
    const { title, author, description } = book;
    db.run('INSERT INTO books (title, author, description) VALUES (?, ?, ?)', [title, author, description], function (err) {
      callback(err, { id: this.lastID, title, author, description });
    });
  }

  static update(id, updatedBook, callback) {
    const { title, author, description } = updatedBook;
    db.run('UPDATE books SET title=?, author=?, description=? WHERE id=?', [title, author, description, id], function (err) {
      if (err) {
        return callback(err);
      }
      if (this.changes === 0) {
        // No rows were affected, meaning the book with the given ID was not found
        return callback(null, null);
      }
      // Book updated successfully
      callback(null, { id, title, author, description });
    });
  }

  static delete(id, callback) {
    db.get('SELECT * FROM books WHERE id = ?', [id], (err, book) => {
      if (err) {
        return callback(err);
      }
      if (!book) {
        // Book with the given ID not found
        return callback(null, null);
      }

      db.run('DELETE FROM books WHERE id = ?', [id], function (err) {
        if (err) {
          return callback(err);
        }
        // Book deleted successfully
        callback(null, { id, title: book.title, author: book.author, description: book.description });
      });
    });
  }
}

module.exports = Book;
```

Next we want to document our API with a Swagger. First of all let us install Swagger.

```
npm install swagger-ui-express swagger-jsdoc --save
```

Next define a swagger settings file inside server.js.

```js
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for API',
    },
  },
  apis: ['./routes/*.js'], 
};

const specs = swaggerJsdoc(options);

module.exports = specs;
```

Add Swagger to the server.js.

```js
// server/server.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();
const port = 3001;

const bookRoutes = require('./routes/books');

app.use(express.json());

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api/books', bookRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

Add swagger descriptions to the books.js routes.

```js
const express = require('express');
const bookController = require('../controllers/bookController');

const router = express.Router();

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books.
 *     responses:
 *       '200':
 *         description: A successful response with the list of books.
 */
router.get('/', bookController.getAllBooks);

router.get('/:id', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;
```

Now visiting the link http://localhost:3001/api/docs we will see our API documentation.

Now we have our CRUD with MVC set for the books. Also, we have set Swagger for API documentation. We will integrate our frontend with our backend API.

## INTEGRATING FRONTEND WITH BOOKS API

Let us go back to the client app, but keep our server run and listening.

Inside our client/src/books/Books.js we will fetch our data from the API endpoint http://localhost/api/books. We can use useEffect hook with a combination of a fetch() function or library like Axios, or React Query. For simplicity we will us fetch().

```js
import { useState, useEffect } from 'react';
import Book from './Book'

function Books() {
    // Dummy data
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:3001/api/books');
            if (!response.ok) {
              throw new Error('Failed to fetch data');
            }
    
            const data = await response.json();
            setBooks(data);
          } catch (error) {
            console.error('Error fetching data:', error.message);
          }
        };
    
        // Call the fetch data function
        fetchData();
      }, []); // Empty dependency array means this effect runs once after the initial render>

    return (
        <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Lista knjiga</h1>

        {books.map((book) => (
            <Book key={book.id} {...book} />
        ))}
        </div>
    );
}
  
export default Books 
```

But we encounted CORS problem because our apps are hosted on different urls. We need to install cors library inside server ```npm install cors``` and add cors middleware inside server.js (add it before routes).

```js
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
```

Now we have a fully connected frontend and backend. Next we will create edit, delete and add book frontend and connect it to the backend.

First let us create delete and edit book. Edit Book.js component:

```js
import React from 'react';

function Book ({ id, title, author, description, onDelete, onEdit }) {
  return (
    <div className="flex flex-inline bg-gray-200 shadow-md p-4 mb-4 rounded-md">
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600">{author}</p>
        <p className="mt-2">{description}</p>
      </div>
      <div className='flex w-full justify-end items-center'>
        <button className='bg-red-800 rounded-md mr-2 p-4' onClick={() => onDelete(id)}>Delete</button>
        <button className='bg-green-800 rounded-md p-4' onClick={() => onEdit(id)}>Edit</button>
      </div> 
    </div>
  );
};

export default Book;
```

Now we will continue, and improve our app with Add and Edit options.

TO DO:

```
Finish CRUD
Add reservations table with FK and display them on reservations page
Add Jest for testing
Dockerize App
Deploy App
Add CI/CD
```