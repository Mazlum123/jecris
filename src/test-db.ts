// src/test-db.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool);

async function testConnection() {
  try {
    await pool.query('SELECT NOW()');
    console.log('✅ Connexion à la base de données réussie !');
  } catch (error) {
    console.error('❌ Erreur de connexion :', error);
  } finally {
    await pool.end();
  }
}

testConnection();