const mysql = require('mysql2');
const DB_NAME = 'virtual_wallet'

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'example',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }

  console.log('Connected to MySQL server');

  // Create the database if it doesn't exist
  const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${DB_NAME}`;
  connection.query(createDatabaseQuery, (createDatabaseError, createDatabaseResults) => {
    if (createDatabaseError) {
      console.error('Error creating database:', createDatabaseError);
      connection.end();
      return;
    }

    console.log(`Database "${DB_NAME}" created or already exists`);

    // Switch to the created database
    connection.changeUser({ database: DB_NAME }, (changeUserError) => {
      if (changeUserError) {
        console.error('Error switching to database:', changeUserError);
        connection.end();
        return;
      }

      console.log(`Switched to database "${DB_NAME}"`);

      // Define the SQL query to create a table if not exists
      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
          id INT AUTO_INCREMENT PRIMARY KEY,
          userName VARCHAR(255) NOT NULL,
          userSurname VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          image VARCHAR(255) NOT NULL
        )
      `;

      // Execute the query to create the table
      connection.query(createTableQuery, (createTableError, createTableResults) => {
        if (createTableError) {
          console.error('Error creating table:', createTableError);
          connection.end();
          return;
        }

        console.log('Table "users" created or already exists');

        // Define the SQL query to insert data into the table
        const insertDataQuery = `
        INSERT INTO contacts (userName, userSurname, email, image) VALUES
        ('Benjamin', 'Reynolds', 'benji@example.com', 'https://picsum.photos/50'),
        ('Summer', 'Akina', 'akisumm@example.com', 'https://picsum.photos/50'),
        ('Theresa', 'William', 'theresa.will@example.com', 'https://picsum.photos/50')
        `;

        // Execute the query to insert data
        connection.query(insertDataQuery, (insertDataError, insertDataResults) => {
          if (insertDataError) {
            console.error('Error inserting data:', insertDataError);
          } else {
            console.log('Data inserted or already exists');
          }

          // Close the connection
          connection.end();
        });
      });
    });
  });
});
