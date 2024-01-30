const express = require('express');
const router = express.Router();
const metricsController = require('../controllers/metricsController');


router.get('/', metricsController.getNodeList, (req,res) => {
  return res.status(200).json(res.locals.nodesList);
});




module.exports = router;