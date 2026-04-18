const express = require('express');
const router = express.Router();

const {
  createNote,
  multipleNotes,
  getAllNotes


} = require('../controllers/note.controller');

router.post('/', createNote);
router.post('/multiple', multipleNotes);
router.get('/', getAllNotes);



module.exports = router;
 

