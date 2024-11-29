# Node.js Basic Server Exercise

**An Exercise from The Odin Project**

This project is a simple Node.js web server that serves different HTML pages based on the URL requested. It's part of The Odin Project's curriculum on learning Node.js.

---

## **Features**

- Serves specific HTML files for different URLs:
  - `/` → `index.html`
  - `/about` → `about.html`
  - `/contact-me` → `contact-me.html`
  - Any other URL → `404.html`
- Uses the **`http`**, **`fs`**, and **`path`** modules.
- Basic error handling for server operations.

---

## **How It Works**

1. The server listens on port `8080`.
2. Depending on the URL requested, it serves the appropriate HTML file or a 404 error page if the route doesn't match.

---

## **Project Structure**

```
project-directory/
│
├── index.js          # Node.js server file
├── index.html        # Home page
├── about.html        # About page
├── contact-me.html   # Contact page
└── 404.html          # 404 error page
```

---

## **How to Run**

### 1. **Clone the Repository**

```bash
git clone https://github.com/Ozioma45/simple_node_App
cd simple_node_App
```

### 2. **Install Node.js**

Ensure Node.js is installed on your machine. [Download it here](https://nodejs.org/).

### 3. **Run the Server**

```bash
node index.js
```

### 4. **Access the Server**

Open your browser and navigate to:

- [http://localhost:8080/](http://localhost:8080/) → Home Page
- [http://localhost:8080/about](http://localhost:8080/about) → About Page
- [http://localhost:8080/contact-me](http://localhost:8080/contact-me) → Contact Page
- Invalid URLs → Displays 404 error page.

---

## **Technologies Used**

- **Node.js**
  - `http` for creating the server.
  - `fs` for reading files.
  - `path` for handling file paths.

---

## **Credits**

This project is part of [The Odin Project](https://www.theodinproject.com/), a comprehensive curriculum for web development.

---

## **License**

This project is free to use for educational purposes.

---
