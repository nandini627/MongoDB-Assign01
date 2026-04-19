const express = require('express');
const router = express.Router();

const {
  createNote,
  multipleNotes,
  getAllNotes,
  getNotesById,
  UpdateById,
  UpdateFieldId,
  deleteById,
  deleteMulti


} = require('../controllers/note.controller');

router.post('/', createNote);
router.post('/multiple', multipleNotes);
router.get('/', getAllNotes);
router.get('/:id', getNotesById);
router.put('/:id', UpdateById);
router.patch('/:id', UpdateFieldId);
router.delete('/multiple', deleteMulti);
router.delete('/:id', deleteById);



module.exports = router;
 

