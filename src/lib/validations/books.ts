import { z } from 'zod'

export const bookSchema = z.object({
  title: z.string().min(1, "Le titre est requis"),
  price: z.number().positive("Le prix doit être positif"),
  authorId: z.string().uuid("ID d'auteur invalide")
})

export type BookInput = z.infer<typeof bookSchema>