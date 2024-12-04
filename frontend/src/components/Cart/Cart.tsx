// frontend/src/components/Cart/Cart.tsx
import { useCartStore } from '../../store/useCartStore';

export default function Cart() {
  const { items, total, removeItem } = useCartStore();

  return (
    <div className="cart">
      <h2>Panier ({items.length})</h2>
      {items.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.title}</span>
          <span>{item.price}€</span>
          <button onClick={() => removeItem(item.id)}>Supprimer</button>
        </div>
      ))}
      <div className="cart-total">
        Total: {total.toFixed(2)}€
      </div>
    </div>
  );
}