import { Router } from 'express';
import connection from '../connection/database';

const router = Router();


// Get all users
router.get('/', (req, res) => {
  connection.query('SELECT * FROM users', (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    res.json(results);
  });
});

// Get user by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
    if (error) {
      return res.status(500).json({ error });
    }
    if (!results) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(results);
  });
});

// Create a new user
router.post('/', (req, res) => {
  const { username, user_password } = req.body;
  console.log("route post works")
  connection.query('INSERT INTO user (username, password) VALUES (?, ?)', [username, user_password], (error, results) => {
        if (error) {
      console.log("error", error)
      return res.status(500).json({ error });
    }
    // res.status(201).json({ id: results.insertId, name, email });
    console.log("res",res)
    console.log("result *******", results)
    res.status(201).json({username, user_password });
  });
});

// Update a user
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   connection.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error });
//     }
//     if (results.affectedRows === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User updated successfully' });
//   });
// });

// Delete a user
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error });
//     }
//     if (results.affectedRows === 0) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   });
// });

export default router;