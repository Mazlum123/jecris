// src/server/routes/books.ts
import express from 'express';
import { db } from '../../db';
import { books } from '../../db/schema/books';
import { eq } from 'drizzle-orm';

const router = express.Router();

// Récupérer tous les livres
router.get('/', async (req, res) => {
  try {
    const allBooks = await db.select().from(books);
    res.json(allBooks);
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des livres' });
  }
});

// Récupérer un livre par ID
router.get('/:id', async (req, res) => {
  try {
    const book = await db.select().from(books).where(eq(books.id, parseInt(req.params.id)));
    if (book.length === 0) {
      return res.status(404).json({ error: 'Livre non trouvé' });
    }
    res.json(book[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération du livre' });
  }
});

// Ajouter un nouveau livre
router.post('/', async (req, res) => {
  try {
    const { title, author, price, description } = req.body;
    const newBook = await db.insert(books).values({
      title,
      author,
      price,
      description
    }).returning();
    res.status(201).json(newBook[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout du livre' });
  }

  // Mettre à jour un livre
router.put('/:id', async (req, res) => {
  try {
    const { title, author, price, description } = req.body;
    const updatedBook = await db
      .update(books)
      .set({ title, author, price, description })
      .where(eq(books.id, parseInt(req.params.id)))
      .returning();

    if (updatedBook.length === 0) {
      return res.status(404).json({ error: 'Livre non trouvé' });
    }
    res.json(updatedBook[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour du livre' });
  }
});

// Supprimer un livre
router.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await db
      .delete(books)
      .where(eq(books.id, parseInt(req.params.id)))
      .returning();

    if (deletedBook.length === 0) {
      return res.status(404).json({ error: 'Livre non trouvé' });
    }
    res.json({ message: 'Livre supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du livre' });
  }
});

export { router as booksRouter };