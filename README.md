# MERN: Full-Stack Note-Taking App


## Getting Started

This section is for anyone following along who wants to get the project running on their own machine before diving into how each piece was built.

#### What you need to download first

- **[Node.js](https://nodejs.org/)** — this gives you `npm` (Node Package Manager), which is how every dependency in this project (Express, React, Mongoose, etc.) gets installed and run. Without it, none of the `npm install` or `npm run` commands used throughout this README will work.
- **A code editor** — I used VS Code, but any editor works.
- **A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account** — this is the database. It's free to create a small cluster, and it gives you the connection string used in the `.env` file below.
- **A [Postman](https://www.postman.com/) account (optional but recommended)** — useful for testing the backend API routes directly, without needing the frontend built yet. More on this in the Backend section.
- **An [Upstash](https://upstash.com/) account** — used for rate limiting requests to the backend. Also free for small projects.

#### Cloning and installing

This project is split into two folders — `backend` and `frontend` — because the server (API) and the client (what the user sees) are two separate applications that talk to each other over HTTP. They each have their own `package.json` and need their own `npm install`.

```
# from the project root
cd backend
npm install

cd ../frontend/"Note App"
npm install
```

#### Setting up environment variables

The backend needs a `.env` file (in the `backend` folder) with the following keys. These are secrets/config values that shouldn't be hard-coded or committed to Git — that's why `.env` is listed in `.gitignore`.

```
MONGO_URI=your-mongodb-connection-string
PORT=5001
UPSTASH_REDIS_REST_URL=your-upstash-redis-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-token
```

#### Running the app

You need both servers running at the same time, in two separate terminals:

```
# terminal 1 - backend (API)
cd backend
npm run dev

# terminal 2 - frontend (UI)
cd frontend/"Note App"
npm run dev
```

The backend runs on `http://localhost:5001` and the frontend runs on `http://localhost:5173`. The frontend is what you open in the browser — it makes requests to the backend behind the scenes.


## BACKEND

### Installing Node.js

To begin, after installing node.js, I initiallsed it by first entering the backend folder with 'CD backend'. 
Then, I typed 'npm init -y' to initialise node and retrieve a package.json file.

I then installed Express with 'npm install express@4.18.2'

You'll need to set a "type" in package.json and set it to "module" to run express.js without error in the server using "node [file name]" in the terminal.

In your package.json file, it is also good to add a script. By adding a script, you are setting up a short-cut command to run in the terminal which executes (running the server).

For example, I set "dev": "node server.js", so whenever I run "npm run dev" in the terminal, it runs "node server.js". 


### Nodemon

#### What is it?

A tool that watches your backend files and automatically restarts the server whenever you save a change.

#### Why use it?

Without it, you'd have to manually stop (`Ctrl+C`) and re-run `node server.js` every single time you edited a file on the backend — which gets tedious fast. Nodemon does that restart for you.

#### How to install

`npm install nodemon --save-dev`. It goes in `devDependencies` rather than `dependencies` because it's only a development convenience — it isn't needed to actually run the app in production. I then updated the "dev" script in `package.json` to run `nodemon src/server.js` instead of `node src/server.js`.


### Dotenv

#### What is it?

A package that loads variables from a `.env` file into `process.env`, so the code can read them (e.g. `process.env.MONGO_URI`).

#### Why use it?

Things like database connection strings and API tokens are secrets — they shouldn't be typed directly into your code, especially if that code is pushed to GitHub. Keeping them in a separate `.env` file (which is git-ignored) means the secrets stay on your machine only, while the rest of the code can still reference them safely.

#### How to install

`npm install dotenv`, then add `import dotenv from "dotenv"` and call `dotenv.config()` right at the top of `server.js`, before anything that needs those variables runs.


### CORS

#### What is it?

Short for Cross-Origin Resource Sharing. It's a browser security rule that blocks a webpage from making requests to a different origin (domain/port) than the one it was served from, unless that other server explicitly allows it.

#### Why use it?

My frontend runs on `localhost:5173` and my backend runs on `localhost:5001` — different ports count as different origins. Without the `cors` middleware, the browser would block every request the frontend tries to make to the backend with a CORS error. Adding `app.use(cors())` tells the backend to allow requests from other origins.

#### How to install

`npm install cors`


### Mongoose

#### What is it?

An ODM (Object Data Modeling) library for MongoDB. It lets me define a **schema** — a fixed shape for what a "Note" document should look like (e.g. `title` is a required String, `content` is a required String) — and then gives me a `Note` model with easy methods like `.find()`, `.findById()`, `.findByIdAndUpdate()`, and `.findByIdAndDelete()` to talk to the database, instead of writing raw MongoDB queries by hand.

#### Why use it?

MongoDB by itself doesn't enforce any structure on documents — you could save a note with no title and nobody would stop you. Mongoose adds that structure and validation back in, which makes bugs easier to catch early.

#### How to install

`npm install mongoose`


### PostMan

#### What is it?

An app for manually sending HTTP requests (GET, POST, PUT, DELETE) to an API and inspecting the response, without needing a frontend built yet.

#### Why use it?

When building the backend first, there's no UI to click buttons on. Postman lets you test that a route like `POST /api/notes` actually creates a note and returns the right response, before any React code exists to call it. It's much faster for debugging backend logic in isolation.

#### How to install PostMan

First, head over to https://www.postman.com/ and download for either Windows or Mac. 

#### Testing Requests w/PostMan

First, you need to select a new request. This is a '+' icon featured somewhere on the left. The, choose HTTP.

**1. Get Request**

The first test I did was to send a Get request to the server, and the controller sent a response showing all available notes (none). So it was a success. 
To do it, I pasted the url into Postman, selecting 'Get' as the request:

![Screenshot of first entry](./readme_images/postman/first_get_req_success_all_notes.png)

**2. Post Request**

Second, I did a basic POST request  - this is where the user will create something. In this instance, it will be a new note title and note content. 

To test this on Postman, you need to create the data in postman - which will be JSON format, since I am using MongoDB. The data will simply be as shown in the image:

![Screenshot of second image](./readme_images/postman/first_post_req_success.png)

I sent the post request to the same url, since the notes page is where users will also create their notes. 

In my MongoDB account, the evidence for the POST request also shows:

![Screenshot of Mongo](./readme_images/postman/mongo_db_post_req_evidence.png)


### MongoDB

This is my first time using MongoDB.

It is... 
- A NoSQL database. 
- It stores data "documents" in a json-like format, suing key: value pairs. 
- Each document has it's own ID at the very top to identify it.
- Each dococument is stored in a collection, which is a collection of related documents. 
- You can store documents within documents. This will be needed to store, for example, side notes within the main note for that day. 

#### IP Access

I chose to access from any IP address while in development because I don't want any errors to show while working, as I use a VPN and the address frequently changes.

![Screenshot of mongoDB IP setting](./readme_images/mongodb/ip_access_all.png)


### Upstash

#### What is it?

A cloud service that gives me a Redis database without having to install or host Redis myself. Redis is an in-memory key-value store — meaning data is kept in RAM rather than on disk, which makes reads and writes extremely fast. That speed is exactly what's needed for rate limiting, since it has to be checked on every single request.

#### Why use it?

To stop any one user (or bot/script) from spamming the API with requests — for example, hammering `POST /api/notes` in a loop. The `@upstash/ratelimit` package counts how many requests a key (currently a hard-coded string, but would be a user ID in a real multi-user app) has made in a sliding time window, and rejects the request with a `429 Too Many Requests` response once the limit is hit.

#### How to install

`npm install @upstash/ratelimit @upstash/redis`. After creating a free Redis database on the Upstash dashboard, it gives you a REST URL and token, which get pasted into `.env` as `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`. `Redis.fromEnv()` then reads those automatically.

---

## FRONTEND

### Vite + React

#### What is it?

React is the JavaScript library used to build the UI out of reusable components (like `NoteCard`, `NavBar`). Vite is the build tool/dev server that runs the React app — it compiles the code, serves it locally, and instantly refreshes the browser whenever a file is saved (Hot Module Replacement).

#### Why use it?

Vite was chosen over older tools like Create React App because it starts up and reloads much faster, which matters a lot when you're saving files constantly while learning.

#### How to install

From the `frontend` folder: `npm create vite@latest`, choosing React as the framework. This scaffolds the project structure (`src/`, `index.html`, `vite.config.js`) and installs `react` and `react-dom`.


### Tailwind CSS

#### What is it?

A utility-first CSS framework. Instead of writing custom CSS classes in a separate `.css` file, you style elements directly in the JSX using pre-built classes like `flex`, `p-4`, or `text-center`.

#### Why use it?

It's much faster than writing and naming custom CSS for every element, and keeps the styling right next to the markup it affects, which makes components easier to read.

#### How to install

`npm install -D tailwindcss postcss autoprefixer`, then added the `@tailwind base; @tailwind components; @tailwind utilities;` directives to `index.css`, and configured `content` in `tailwind.config.js` to point at `./index.html` and `./src/**/*.{js,ts,jsx,tsx}` so Tailwind knows which files to scan for class names.


### DaisyUI

- Tailwind Component Library

- DaisyUI reduces the amount of Tailwind Classes you would need to type code to ge the same result. 

For this, I used version 4.12.24 as it is more secure than the latest. 

To install, I navigated to the version selection at the top left and chose v4.
From there, I selected 'How to use', and then selected the NPM install code to paste into the terminal, but adding '@4.12.24' appended. 


### React Router

#### What is it?

A routing library that lets a single-page React app show different "pages" (components) depending on the URL — for example, `/` shows `HomePage`, and `/create-note` shows `CreatePage` — without a full page reload each time.

#### Why use it?

Without it, React would only ever be able to show one static view. React Router lets `Link` components navigate between pages, and lets `useNavigate()` redirect the user programmatically (e.g. sending them back to the homepage after successfully creating a note).

#### How to install

`npm install react-router-dom`. The whole app is then wrapped in a `<BrowserRouter>` (in `main.jsx`), and routes are declared with `<Routes>` / `<Route path="..." element={...} />` (in `App.jsx`).


### Axios

#### What is it?

A library for making HTTP requests from the frontend to the backend (GET, POST, PUT, DELETE), similar to the built-in `fetch`, but with a simpler syntax and automatic JSON parsing.

#### Why use it?

It's used everywhere the frontend needs to talk to the API — fetching all notes on the homepage, and posting a new note from the create page. Compared to `fetch`, it throws an actual error on non-2xx responses (so a `try/catch` around it reliably catches failed requests), rather than requiring an extra manual check.

#### How to install

`npm install axios`


### Axios Instance

#### What is it?

Rather than calling `axios.get(...)` / `axios.post(...)` directly and typing out the full backend URL (`http://localhost:5001/api/notes`) in every single component, `axios.create()` lets you build one pre-configured version of axios — called an "instance" — with settings like the base URL already baked in. That instance lives in `src/lib/axios.js`:

```js
import axios from 'axios';

const api = axios.create({
    baseURL : "http://localhost:5001/api"
});

export default api;
```

Any component can then import it and just call `api.get("/notes")` or `api.post("/notes", data)` — the `baseURL` is automatically prepended to whatever path is passed in.

#### Why use it?

Two reasons:

1. **No repetition.** The full backend URL only needs to be written once, in one file, instead of copy-pasted into every component that makes a request.
2. **One place to change it.** If the backend's URL or port ever changes (e.g. moving from `localhost:5001` to a deployed server), only `src/lib/axios.js` needs updating — not every page that makes a request.

It also opens the door to shared config later, like default headers or auth tokens, without having to add them to every individual request.

#### How to use it

Instead of:

```js
import axios from 'axios'
const response = await axios.get("http://localhost:5001/api/notes")
```

you'd write:

```js
import api from '../lib/axios'
const response = await api.get("/notes")
```

> Note: at the moment, `HomePage.jsx` and `CreatePage.jsx` still call `axios` directly with the full hardcoded URL rather than importing this instance — wiring them up to use `api` instead is a good next cleanup step.


### React-Hot-Toast

#### What is it?

A small library for showing temporary pop-up notifications ("toasts") in the corner of the screen, e.g. `toast.success("Note created successfully!")` or `toast.error("Failed to create note!")`.

#### Why use it?

It gives the user quick, non-blocking feedback after an action (like creating a note, or a request failing) without needing to build a custom notification component from scratch.

#### How to install

`npm install react-hot-toast`. A single `<Toaster />` component is placed once near the root of the app (in `main.jsx`), and then `toast.success(...)` / `toast.error(...)` can be called from any component.


### Lucide-React

#### What is it?

An icon library — a set of ready-made SVG icons (e.g. `PlusIcon`, `Trash2Icon`, `PenSquareIcon`) packaged as React components.

#### Why use it?

Instead of sourcing, downloading, and importing individual SVG files for every icon needed (a plus icon for "New Note", a trash icon for deleting), each one is just a component that can be dropped in and styled with the same Tailwind classes as everything else (e.g. `className='size-5'`).

#### How to install

`npm install lucide-react`
