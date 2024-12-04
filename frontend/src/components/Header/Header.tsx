// frontend/src/components/Header/Header.tsx
export default function Header() {
    return (
      <header className="header">
        <div className="logo">
          <h1>JeCris</h1>
        </div>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/add-book">Ajouter un livre</a></li>
          </ul>
        </nav>
      </header>
    );
  }