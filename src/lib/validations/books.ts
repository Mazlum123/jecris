// src/lib/validations/books.ts
import { z } from 'zod';

export const BookSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  author: z.string().min(1, "L'auteur est requis"),
  price: z.number().min(0, "Le prix doit être positif"),
});