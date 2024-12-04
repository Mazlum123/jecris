// src/server/index.ts
import express from 'express';
import cors from 'cors';
import { booksRouter } from './routes/books';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});