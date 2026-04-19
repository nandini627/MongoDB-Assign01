const express = require('express');
const router = express.Router();

const {
  createNote,
  multipleNotes,
  getAllNotes,
  getNotesById


} = require('../controllers/note.controller');

router.post('/', createNote);
router.post('/multiple', multipleNotes);
router.get('/', getAllNotes);
router.get('/:id', getNotesById);



module.exports = router;
 

