import mysql from 'mysql2';
import { environment } from '../environments/environment';

const connection = mysql.createConnection({
  host: environment.database.host,
  user: environment.database.user,
  password: environment.database.password,
  database: environment.database.database
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the MySQL database.');
});

export default connection;