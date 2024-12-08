// src/db/init.ts
import { db } from './index';
import { books } from './schema/books';

async function initDatabase() {
  try {
    // Insérer quelques livres de test
    await db.insert(books).values([
      {
        title: 'Le Petit Prince',
        author: 'Antoine de Saint-Exupéry',
        price: 9.99,
        description: 'Un classique de la littérature française'
      },
      {
        title: '1984',
        author: 'George Orwell',
        price: 12.99,
        description: 'Un roman dystopique visionnaire'
      },
      {
        title: 'L\'Étranger',
        author: 'Albert Camus',
        price: 8.99,
        description: 'Un chef-d\'œuvre de l\'absurde'
      }
    ]);

    console.log('Base de données initialisée avec succès !');
  } catch (error) {
    console.error('Erreur lors de l\'initialisation de la base de données:', error);
  }
}

initDatabase();