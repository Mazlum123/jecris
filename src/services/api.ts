// frontend/src/services/api.ts
const API_URL = 'http://localhost:3000/api';

export const bookService = {
  async getAllBooks() {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) throw new Error('Erreur lors de la récupération des livres');
    return response.json();
  },

  async addBook(book: any) {
    const response = await fetch(`${API_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });
    if (!response.ok) throw new Error('Erreur lors de l\'ajout du livre');
    return response.json();
  }
};