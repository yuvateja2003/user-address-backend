import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import path from 'path';
import { createTables } from './models/db';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Database connection
export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api', userRoutes);

// Create tables
createTables();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});