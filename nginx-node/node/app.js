const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

// Configuração do MySQL
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb',
  port: 3306,
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }

  console.log('Connected to MySQL database');

  const createTable = `CREATE TABLE IF NOT EXISTS people (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )`;

  connection.query(createTable, (err, results) => {
    if (err) {
      console.error('Error creating table:', err);
      return;
    }
    console.log('Table created or already exists');
    // Verificar se o nome "Rafael" já existe antes de inserir
    const name = 'Rafael';
    connection.query('SELECT COUNT(*) AS count FROM people WHERE name = ?', [name], (err, results) => {
      if (err) throw err;
      if (results[0].count === 0) {
        connection.query('INSERT INTO people (name) VALUES (?)', [name], (err) => {
          if (err) throw err;
          console.log('Name inserted');
        });
      } else {
        console.log('Name already exists');
      }
    });
  });
});

// Rota principal
app.get('/', (req, res) => {
  connection.query('SELECT name FROM people', (err, results) => {
    if (err) throw err;
    res.send(`<h1>Full Cycle Rocks!</h1><ol>${results.map((row) => `<li>${row.name}</li>`).join('')}</ol>`);
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
