// frontend/src/services/api.ts
const API_URL = 'http://localhost:3000/api';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
}

export const bookService = {
  async getAllBooks(): Promise<Book[]> {
    try {
      const response = await fetch(`${API_URL}/books`);
      if (!response.ok) throw new Error('Erreur réseau');
      return response.json();
    } catch (error) {
      console.error('Erreur:', error);
      return [];
    }
  }
};