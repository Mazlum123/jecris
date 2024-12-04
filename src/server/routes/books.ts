// src/server/routes/books.ts
import express from 'express';
import { db } from '../db';
import { books } from '../db/schema/books';

const router = express.Router();

// Récupérer tous les livres
router.get('/', async (req, res) => {
  try {
    const allBooks = await db.select().from(books);
    res.json(allBooks);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de la récupération des livres" });
  }
});

// Ajouter un livre
router.post('/', async (req, res) => {
  const { title, author, price, description } = req.body;
  try {
    const newBook = await db.insert(books).values({
      title,
      author,
      price,
      description
    }).returning();
    res.status(201).json(newBook[0]);
  } catch (error) {
    res.status(500).json({ error: "Erreur lors de l'ajout du livre" });
  }
});

export { router as booksRouter };