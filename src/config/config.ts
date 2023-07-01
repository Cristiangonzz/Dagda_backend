import {config} from 'dotenv';
config();   
export const PORT = 80;//Puerto para MERCAOD PAGO
export const HOST = `http://localhost:${PORT}`;
export const NGROK = 'https://a748-167-116-52-251.ngrok-free.app';
export const MERCADOPAGO_API_KEY = process.env.MERCADOPAGO_API_KEY;//Token del vendedor
export const MYSQLHOST = process.env.MYSQLHOST;
export const MYSQLPORT = parseInt(process.env.MYSQLPORT);
export const MYSQLUSER = process.env.MYSQLUSER;
export const MYSQLCLAVE = process.env.MYSQLCLAVE;
export const MYSQLNOMBREDATEBASE = process.env.MYSQLNOMBREDATEBASE;
export const CORS_ORIGIN = process.env.CORS_ORIGIN;
export const PUERTO_SERVIDOR =parseInt(process.env.PUERTO_SERVIDOR);





















//sftp.json
// {
//     "name": "corpdagda",
//     "host": "199.217.116.197",
//     "protocol": "ftp",
//     "port": 21,
//     "username": "cristian",
//     "remotePath": "/",
//     "uploadOnSave": true,
//     "useTempFile": false,
//     "openSsh": false
// }
