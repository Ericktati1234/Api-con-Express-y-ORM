const express = require('express');
const router = express.Router();
const controller = require('../controllers/actors');


/* POST create actor. */
router.post('/',controller.create);


/* GET actors listing. */
router.get('/',controller.list);

/* GET actor where id is. */
router.get('/:id',controller.index);

/* PUT replace specific actor */
router.put('/:id',controller.replace);

/* PATCH update specific actor */
router.patch('/:id',controller.update);

/* DELETE delete specific actor */
router.delete('/:id',controller.destroy);

module.exports = router;
