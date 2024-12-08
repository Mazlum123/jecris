// frontend/src/store/useCartStore.ts
import { create } from 'zustand';

interface Book {
  id: number;
  title: string;
  price: number;
}

interface CartStore {
  items: Book[];
  total: number;
  addItem: (book: Book) => void;
  removeItem: (bookId: number) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (book) =>
    set((state) => ({
      items: [...state.items, book],
      total: state.items.reduce((sum, item) => sum + item.price, 0) + book.price
    })),
  removeItem: (bookId) =>
    set((state) => ({
      items: state.items.filter(item => item.id !== bookId),
      total: state.items
        .filter(item => item.id !== bookId)
        .reduce((sum, item) => sum + item.price, 0)
    }))
}));