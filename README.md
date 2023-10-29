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
          &copy; {new Date().getFullYear()} 2023 Tutorijal
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