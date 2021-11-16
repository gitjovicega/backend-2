
const { Router } = require('express')
const router = Router();
const EmpleadoCtrl = require('../controllers/Empleado.controllers')
const Auth = require('../helper/Auth')

router.post('/crear', Auth.verificarToken,EmpleadoCtrl.crear)
router.get('/listarEmpleados', Auth.verificarToken,EmpleadoCtrl.listar)
router.get('/listar/:id', Auth.verificarToken,EmpleadoCtrl.listarId)
router.get('/listarEmpleadosJefe/:id', Auth.verificarToken,EmpleadoCtrl.empleadoDeunJefe)
router.delete('/eliminar/:id', Auth.verificarToken,EmpleadoCtrl.eliminar)
router.put('/actualizar/:id', Auth.verificarToken,EmpleadoCtrl.actualizar)
router.get('/buscar/:nombres', Auth.verificarToken,EmpleadoCtrl.buscarEmpleado)

module.exports = router