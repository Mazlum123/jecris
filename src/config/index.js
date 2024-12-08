// src/config/index.ts
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  database: {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'votre_mot_de_passe',
    name: process.env.DB_NAME || 'jecris'
  },
  server: {
    port: parseInt(process.env.PORT || '3000')
  }
};