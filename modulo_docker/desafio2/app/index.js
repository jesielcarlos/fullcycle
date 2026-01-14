const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = process.env.PORT || 3000;

const dbConfig = {
  host: process.env.DB_HOST || "db",
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || "fullcycle",
  password: process.env.DB_PASSWORD || "fullcycle",
  database: process.env.DB_NAME || "fullcycle",
};

const pool = mysql.createPool(dbConfig);

const names = [
  "Ana",
  "Bruno",
  "Carlos",
  "Duda",
  "Enzo",
  "Fernanda",
  "Gustavo",
  "Helena",
];

async function waitForDb(retries = 20, delayMs = 1500) {
  for (let attempt = 1; attempt <= retries; attempt += 1) {
    try {
      await pool.query("SELECT 1");
      return;
    } catch (err) {
      if (attempt === retries) {
        throw err;
      }
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

async function ensureTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `);
}

async function seedNames() {
  const [[{ count }]] = await pool.query(
    "SELECT COUNT(*) AS count FROM people"
  );
  if (count > 0) {
    return;
  }

  const values = names.map((name) => [name]);
  await pool.query("INSERT INTO people (name) VALUES ?", [values]);
}

app.get("/", async (_req, res) => {
  const [rows] = await pool.query("SELECT name FROM people");

  const listItems = rows.map((row) => `<li>${row.name}</li>`).join("");
  res.set("Content-Type", "text/html");
  res.send(`<h1>Full Cycle Rocks!</h1><ul>${listItems}</ul>`);
});

async function start() {
  await waitForDb();
  await ensureTable();
  await seedNames();

  app.listen(port, () => {
    console.log(`app running on port ${port}`);
  });
}

start();
