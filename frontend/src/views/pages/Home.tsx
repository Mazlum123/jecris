const Home = () => {
    return (
      <div className="home">
        <section className="hero">
          <h1>JECRIS</h1>
          <p>Votre plateforme d'écriture et de publication</p>
        </section>

        <section className="features">
          <div className="feature">
            <h2>Écrivez</h2>
            <p>Créez et partagez vos histoires</p>
          </div>

          <div className="feature">
            <h2>Publiez</h2>
            <p>Partagez vos œuvres avec le monde</p>
          </div>

          <div className="feature">
            <h2>Vendez</h2>
            <p>Monétisez votre passion</p>
          </div>
        </section>
      </div>
    )
  }

  export default Home