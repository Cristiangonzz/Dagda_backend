import * as mercadopago from 'mercadopago';
import {PORT , HOST ,NGROK,MERCADOPAGO_API_KEY} from "../../../config/config"

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token: MERCADOPAGO_API_KEY//se esta usando la de prueba 
      ,
  });
  const result = await mercadopago.preferences.create({
    items: [
      {
        title: req.body.title,
        unit_price: req.body.unit_price,
        currency_id: req.body.currency_id,
        quantity: 1,
      },
    ],
    back_urls: {
      success: `${HOST}/success`,
      failure: `${HOST}/failure`,
      pending: `${HOST}/pending`,
    },
    auto_return: 'approved',
    binary_mode: true,
    notification_url: `${NGROK}/webhook`,
  });
  
  res.send(result);
};

export const receiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);
      console.log("este es el id verdadero en el pago",data); //podemos guardar el id del pago en la base de datos
    }
    return res.sendStatus(204);
  } catch (error) {

    return res.sendStatus(500).json({ error: error.message });
  }
};
