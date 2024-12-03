// src/test-tables.ts
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './lib/schema';
import 'dotenv/config';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const db = drizzle(pool, { schema });

async function testInserts() {
  try {
    // Test insertion utilisateur
    const user = await db.insert(schema.users).values({
      name: 'Test User',
      email: 'test@example.com',
      password: 'test123', // En production, il faudrait hasher le mot de passe
    }).returning();
    console.log('✅ Utilisateur créé:', user);

    // Test insertion livre
    const book = await db.insert(schema.books).values({
      title: 'Test Book',
      price: '29.99',
      authorId: user[0].id, // Utilisez camelCase
    }).returning();
    console.log('✅ Livre créé:', book);

    // Test insertion transaction
    const transaction = await db.insert(schema.transactions).values({
      buyerId: user[0].id,  // Utilisez camelCase
      bookId: book[0].id,   // Utilisez camelCase
      amount: '29.99',
    }).returning();
    console.log('✅ Transaction créée:', transaction);

  } catch (error) {
    console.error('❌ Erreur lors des tests:', error);
  } finally {
    await pool.end();
  }
}

testInserts();