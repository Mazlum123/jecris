// frontend/src/store/useCartStore.ts
import create from 'zustand';

interface Book {
  id: number;
  title: string;
  price: number;
}

interface CartStore {
  items: Book[];
  addItem: (book: Book) => void;
  removeItem: (bookId: number) => void;
  total: number;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  total: 0,
  addItem: (book) => set((state) => {
    const newItems = [...state.items, book];
    return {
      items: newItems,
      total: newItems.reduce((sum, item) => sum + item.price, 0)
    };
  }),
  removeItem: (bookId) => set((state) => {
    const newItems = state.items.filter(item => item.id !== bookId);
    return {
      items: newItems,
      total: newItems.reduce((sum, item) => sum + item.price, 0)
    };
  })
}));