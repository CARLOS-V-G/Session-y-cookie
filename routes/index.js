var express = require('express');
var router = express.Router();
const formValidator = require('../validations/formularioValidator')
const { formularioIndex, index, deleteColor } = require('../controllers/usersController');

router.get('/', index);

router.post('/', formValidator, formularioIndex);

/* router.get('/views-date-user', userController.confirm); */

router.get('/deleteColor', deleteColor);

module.exports = router;





module.exports = router;
