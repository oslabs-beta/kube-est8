const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricsController.ts');


router.get('/', metricsController.getNodeList, (req,res) => {
  return res.status(200).send(res.locals.nodesList);
});




module.exports = router;