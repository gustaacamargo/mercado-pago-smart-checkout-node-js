const MercadoPago = require('mercadopago');

module.exports = {
    async checkoutTest(req, res) {
      const preapprovalPayment = {
        preapproval_plan_id: req.body.preapproval_plan_id,
        card_token_id: req.body.token,
        payer_email: req.body.payer_email
      };
    
      MercadoPago.preapproval.create(preapprovalPayment).then(function (data) {
        return res.json({ 'ok': 'assinatura criada' })
      }).catch(function (error) {
        return res.status(500).json({ 'error': error })
      });
    }
}