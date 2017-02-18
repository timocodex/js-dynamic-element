var express = require('express');
var router = express.Router();
var Todo = require('../controllers/todos.controller')

router.get('/',Todo.show)
router.post('/',Todo.create)
router.put('/:id',Todo.done)
router.delete('/:id',Todo.delete)
router.delete('/',Todo.deleteAll)

module.exports = router;
