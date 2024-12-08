// frontend/src/pages/Home.tsx
import { useState, useEffect } from 'react';
import { bookService } from '../services/api';
import Book from '../components/Book/Book';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
}

export default function Home() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await bookService.getAllBooks();
        setBooks(data);
      } catch (err) {
        setError('Erreur lors du chargement des livres');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <div>Chargement...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home">
      <h1>Bibliothèque</h1>
      <div className="books-grid">
        {books.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}