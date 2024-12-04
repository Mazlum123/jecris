// frontend/src/components/Book/Book.tsx
interface BookProps {
    id: number;
    title: string;
    author: string;
    price: number;
    description: string;
  }

  export default function Book({ id, title, author, price, description }: BookProps) {
    const addItem = useCartStore(state => state.addItem);

    return (
      <div className="book-card">
        <h3>{title}</h3>
        <p className="author">Par {author}</p>
        <p className="price">{price}€</p>
        <p className="description">{description}</p>
        <button
          className="add-to-cart"
          onClick={() => addItem({ id, title, price })}
        >
          Ajouter au panier
        </button>
      </div>
    );
  }