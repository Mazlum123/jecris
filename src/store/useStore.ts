import { create } from 'zustand'

type CartItem = {
  bookId: string
  quantity: number
}

interface StoreState {
  cart: CartItem[]
  addToCart: (bookId: string) => void
  removeFromCart: (bookId: string) => void
  clearCart: () => void
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  addToCart: (bookId) => 
    set((state) => ({
      cart: [...state.cart, { bookId, quantity: 1 }]
    })),
  removeFromCart: (bookId) =>
    set((state) => ({
      cart: state.cart.filter(item => item.bookId !== bookId)
    })),
  clearCart: () => set({ cart: [] })
}))