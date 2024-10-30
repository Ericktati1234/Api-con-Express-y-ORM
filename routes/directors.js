const express = require('express');
const router = express.Router();
const controller = require('../controllers/directors');

/* POST create director. */
router.post('/',controller.create);

/* GET directors listing. */
router.get('/',controller.list);

/* GET director where id is. */
router.get('/:id',controller.index);

/* PUT replace specific director */
router.put('/:id',controller.replace);

/* PATCH update specific director */
router.patch('/:id',controller.update);

/* DELETE delete specific director */
router.delete('/:id',controller.destroy);

module.exports = router;
