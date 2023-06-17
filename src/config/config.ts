import {config} from 'dotenv';
config();   
export const PORT = 3001;//Puerto para MERCAOD PAGO
export const HOST = `http://localhost:${PORT}`;
export const NGROK = 'https://a748-167-116-52-251.ngrok-free.app';
export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY;//Token del vendedor
export const CORS_ORIGIN = process.env.CORS_ORIGIN;