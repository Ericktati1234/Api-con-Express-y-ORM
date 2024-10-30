const express = require('express');
const router = express.Router();
const controller = require('../controllers/genres');

/* POST create genre. */
router.post('/',controller.create);

/* GET genres listing. */
router.get('/',controller.list);

/* GET genre where id is. */
router.get('/:id',controller.index);

/* PUT replace specific genre */
router.put('/:id',controller.replace);

/* PATCH update specific genre */
router.patch('/:id',controller.update);

/* DELETE delete specific genre */
router.delete('/:id',controller.destroy);

module.exports = router;
