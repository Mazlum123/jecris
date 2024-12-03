// src/lib/schema/books.ts
import { pgTable, uuid, varchar, text, decimal, timestamp, integer, boolean } from 'drizzle-orm/pg-core';

export const books = pgTable('books', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  isbn: varchar('isbn', { length: 20 }),
  language: varchar('language', { length: 50 }),
  number_of_pages: integer('number_of_pages'), // Vérifiez si integer est bien pris en charge
  summary: text('summary'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  availability: boolean('availability').default(true), // Vérifiez que boolean est une fonction exportée
  publication_date: timestamp('publication_date').defaultNow(),
  status: varchar('status', { length: 50 }).default('on_sale')
});