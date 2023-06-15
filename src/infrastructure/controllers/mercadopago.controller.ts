import { Router } from 'express';
import {
  createOrder,
  receiveWebhook,
} from '../../application/useCase/mercado-pago/create-order.usecase';
const router = Router();
router.post('/create-order', createOrder);

router.get('/success', (req, res) => {res.redirect('http://localhost:4200/carrito/success');});
router.get('/failure', (req, res) => {res.redirect('http://localhost:4200/carrito/success');});
router.get('/pending', (req, res) => {res.redirect('http://localhost:4200/home');});

router.post('/webhook', receiveWebhook);

export default router;
