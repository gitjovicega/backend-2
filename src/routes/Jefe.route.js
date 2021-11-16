const { Router } = require('express')
const router = Router();
const JefeCtrl = require('../controllers/Jefe.Controllers')

router.post('/crear', JefeCtrl.crearJefe)
router.post('/login', JefeCtrl.login)
module.exports = router