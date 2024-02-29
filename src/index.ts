import express from 'express';
const cors = require('cors');
import { connection } from "./db";
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json());

// Add user
app.post('/user', async (req, res) => {
  let data = [req.body.name, req.body.surname, req.body.username, req.body.email, req.body.password, req.body.image];

  connection.query(
    'INSERT INTO users (name, surname, username, email, password, image) VALUES (?, ?, ?, ?, ?, ?)', data,
    (error, results, fields) => {
      if (error) {
        console.error('Error adding user', error);
        return;
      }
      res.json(results);
    }
  );
});

// // get users
// app.get('/users', async (req, res) => {

//   connection.query('SELECT * FROM users', (error, results) => {
//     if (error) {
//       console.error('Error getting users', error);;
//       return;
//     }
//     res.json({ users: results });
//   });
// });

// // Get characters
// app.get('/characters', async (req, res) => {

//   connection.query('SELECT * FROM characters', (error, results) => {
//     if (error) {
//       console.error('Error gettuing characters', error);;
//       return;
//     }
//     res.json({ characters: results });
//   });
// });

// // Remove character
// app.delete('/characters/:id', async (req, res) => {
//   const characterId = req.params.id;

//   connection.query('DELETE FROM characters WHERE id = ?', [characterId], (error, results) => {
//     if (error) {
//       console.error('Error deleting character', error);
//       return;
//     }
//     res.json({ success: true, message: 'Character deleted successfully' });
//   });
// });

// // Edit character
// app.put('/characters/:id', async (req, res) => {
//   const { id } = req.params;
//   const updatedCharacter = req.body;

//   if (!updatedCharacter.name || !updatedCharacter.race || !updatedCharacter.age || !updatedCharacter.charClass || !updatedCharacter.description) {
//     res.status(400).json({ error: 'Incomplete data for character update' });
//     return;
//   }

//   connection.query(
//     'UPDATE characters SET name = ?, race = ?, age = ?, charClass = ?, description = ? WHERE id = ?',
//     [updatedCharacter.name, updatedCharacter.race, updatedCharacter.age, updatedCharacter.charClass, updatedCharacter.description, id],
//     (error, results) => {
//       if (error) {
//         console.error('Error updating character:', error);
//         return;
//       }

//       res.json({ character: updatedCharacter });
//     }
//   );
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});