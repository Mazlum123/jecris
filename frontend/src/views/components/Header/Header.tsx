// frontend/src/components/Header/Header.tsx
import './Header.scss';

const Header = () => {
    return (
      <header className="header">
        <div className="header__logo">
          JECRIS
        </div>
        <nav className="header__nav">
          <a href="/" className="header__link">Accueil</a>
          <a href="/bibliotheque" className="header__link">Bibliothèque</a>
          <a href="/ecrire" className="header__link">Écrire</a>
          <a href="/contact" className="header__link">Contact</a>
          <a href="/connexion" className="header__link">Se connecter</a>
        </nav>
      </header>
    );
  };

  export default Header;