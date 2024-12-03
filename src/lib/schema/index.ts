// src/lib/schema/index.ts
import { pgTable, uuid, varchar, decimal, timestamp, boolean, text, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Table Users
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  first_name: varchar('first_name', { length: 255 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  date_of_birth: timestamp('date_of_birth'),
  address: varchar('address', { length: 255 }),
  password: varchar('password', { length: 255 }).notNull(),
  type: varchar('type', { length: 50 }).default('buyer')
});

// Table Books
export const books = pgTable('books', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  publication_date: timestamp('publication_date'),
  isbn: varchar('isbn', { length: 20 }),
  language: varchar('language', { length: 50 }),
  number_of_pages: integer('number_of_pages'),
  summary: text('summary'),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  availability: boolean('availability').default(true),
  publisher_id: uuid('publisher_id').references(() => users.id),
  series_id: uuid('series_id'),
  status: varchar('status', { length: 50 }).default('on_sale')
});

// Table Transactions
export const transactions = pgTable('transactions', {
  id: uuid('id').defaultRandom().primaryKey(),
  transaction_date: timestamp('transaction_date').defaultNow(),
  buyer_id: uuid('buyer_id').references(() => users.id),
  seller_id: uuid('seller_id').references(() => users.id),
  book_id: uuid('book_id').references(() => books.id),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  status: varchar('status', { length: 50 }).default('pending'),
  stripe_payment_id: varchar('stripe_payment_id', { length: 255 })
});

// Relations
export const booksRelations = relations(books, ({ one }) => ({
  author: one(users, {
    fields: [books.publisher_id],
    references: [users.id],
  }),
}));

export const transactionsRelations = relations(transactions, ({ one }) => ({
  buyer: one(users, {
    fields: [transactions.buyer_id],
    references: [users.id],
  }),
  seller: one(users, {
    fields: [transactions.seller_id],
    references: [users.id],
  }),
  book: one(books, {
    fields: [transactions.book_id],
    references: [books.id],
  }),
}));