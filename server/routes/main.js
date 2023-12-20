const express = require('express');
const router = express.Router();
const examController = require('./../controllers/exam');

// home route
router.get('/', examController.getHome);
// routes CRUD Exam
router.post('/addExam', examController.postExam);
router.get('/exams', examController.getExams);
router.get('/exams/:id', examController.getOneExam);
router.put('/exams/:id', examController.updateExam);
router.delete('/exams/:id', examController.deleteExam);
// routes CRUD MCQs


module.exports = router;