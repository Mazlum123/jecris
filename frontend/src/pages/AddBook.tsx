// frontend/src/pages/AddBook.tsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Ajouter l'appel API ici
    console.log('Livre à ajouter:', book);
    navigate('/');
  };

  return (
    <div className="add-book">
      <h2>Ajouter un nouveau livre</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input
            type="text"
            id="title"
            value={book.title}
            onChange={(e) => setBook({...book, title: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Auteur</label>
          <input
            type="text"
            id="author"
            value={book.author}
            onChange={(e) => setBook({...book, author: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Prix</label>
          <input
            type="number"
            id="price"
            step="0.01"
            value={book.price}
            onChange={(e) => setBook({...book, price: e.target.value})}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={book.description}
            onChange={(e) => setBook({...book, description: e.target.value})}
          />
        </div>

        <button type="submit">Ajouter le livre</button>
      </form>
    </div>
  );
}