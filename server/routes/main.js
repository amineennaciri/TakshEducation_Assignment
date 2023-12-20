const express = require('express');
const router = express.Router();
const examController = require('./../controllers/exam');
const MCQsController = require('./../controllers/mcqs');

// home route
router.get('/', examController.getHome);
// routes CRUD Exam
router.post('/addexam', examController.postExam);
router.get('/exams', examController.getExams);
router.get('/exams/:examId', examController.getOneExam);
router.put('/exams/:examId', examController.updateExam);
router.delete('/exams/:examId', examController.deleteExam);
// routes CRUD MCQs
router.post('/exams/:examId/addmcq', MCQsController.postMCQ);
router.get('/exams/:examId/mcqs', MCQsController.getMCQs);
router.get('/exams/:examId/mcqs/:mcqId', MCQsController.getOneMCQs);
router.put('/exams/:examId/mcqs/:mcqId', MCQsController.updateMCQ);
router.delete('/exams/:examId/mcqs/:mcqId', MCQsController.deleteMCQ);

module.exports = router;