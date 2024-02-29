import mysql from 'mysql2';

export const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'example',
  database: 'virtual_wallet', // Change this to the name of your newly created database
});
