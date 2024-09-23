import express from 'express';
import { pool } from '../server';

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, address } = req.body;

  if (!name || !address) {
    return res.status(400).json({ error: 'Name and address are required' });
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const userResult = await client.query(
      'INSERT INTO users (name) VALUES ($1) RETURNING id',
      [name]
    );
    const userId = userResult.rows[0].id;

    await client.query(
      'INSERT INTO addresses (user_id, address) VALUES ($1, $2)',
      [userId, address]
    );

    await client.query('COMMIT');
    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.release();
  }
});

export default router;