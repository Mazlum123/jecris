import { pgTable, uuid, varchar, timestamp, decimal, integer } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email').notNull().unique(),
  password: varchar('password').notNull(),
  name: varchar('name').notNull(),
  createdAt: timestamp('created_at').defaultNow()
})

export const books = pgTable('books', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  authorId: uuid('author_id').references(() => users.id),
  status: varchar('status').notNull().default('draft')
})

export const transactions = pgTable('transactions', {
  id: uuid('id').primaryKey().defaultRandom(),
  buyerId: uuid('buyer_id').references(() => users.id),
  bookId: uuid('book_id').references(() => books.id),
  amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
  status: varchar('status').notNull().default('pending'),
  createdAt: timestamp('created_at').defaultNow()
})