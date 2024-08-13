const express = require("express")
const router = express.Router()
const { auth } = require('../middleware/auth')
const { all, add, remove, edit, employee } = require("../controllers/employees")


// route /api/employees
router.get('/', auth, all)  

// route /api/employees/:id
router.get('/:id', auth, employee)

// route /api/add
router.post('/add', auth, add)
// route /api/remove/:id
router.post('/remove/:id', auth, remove)

// route /api/edit/:id
router.put('/edit/:id', auth, edit)
module.exports = router