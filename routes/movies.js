const express = require('express');
const router = express.Router();
const controller = require('../controllers/movies');

/* POST create movie. */
router.post('/',controller.create);

/* GET movies listing. */
router.get('/',controller.list);

/* GET movie where id is. */
router.get('/:id',controller.index);

/* PUT replace specific movie */
router.put('/:id',controller.replace);

/* PATCH update specific movie */
router.patch('/:id',controller.update);

/* DELETE delete specific movie */
router.delete('/:id',controller.destroy);

module.exports = router;
