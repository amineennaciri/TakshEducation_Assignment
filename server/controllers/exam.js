const Exam = require('./../models/exam');
const { ObjectId } = require('mongodb');

module.exports = {
    getHome: (req,res)=>{
        return res.status(234).send('Welcome to Home Page!');
    },
    postExam: async (req, res)=>{
        try {
            if(
                !req.body.title ||
                !req.body.duration
            ){
                return res.status(500).send({
                    message: "Send all required fields: title, duration"
                })
            }
            /* console.log(req.user._id); */
            const exam = new Exam({
                title: req.body.title,
                duration: req.body.duration,
              });
              const result = await exam.save();
              return res.status(201).send(result);   
        } catch (error) {
            console.log(error.message);
            res.status(500).send({message: error.message});
        }
    },
    getExams: async (req, res)=>{
        try {
            const exams = await Exam.find();
            return res.status(200).json({
                count: exams.length,
                data: exams
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message })
        }
    },
    getOneExam: async (req, res)=>{
        try {
            const exam = await Exam.findOne(new ObjectId(req.params.id));
            if(!exam){
                return res.status(404).json({
                    message: 'Exam not found'
                });
            }
            return res.status(200).json(exam);
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message })
        }
    },
    updateExam: async (req, res)=>{
        try {
            if(
                !req.body.title ||
                !req.body.duration
            ){
                return res.status(400).send({
                    message: "Send all required fields: title, duration"
                })
            }
            const { id } = req.params;
            const result = await Exam.findByIdAndUpdate(id, req.body);
            if (!result){
                return res.status(404).json({
                    message: 'Exam not found'
                });
            }
            return res.status(200).send({message:'Exam Updated Successfully'});
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message })
        }
    },
    deleteExam: async (req, res)=>{
        try {
            const { id } = req.params;
            const result = await Exam.findByIdAndDelete(id, req.body);
            if (!result){
                return res.status(404).json({
                    message: 'Exam not found'
                });
            }
            return res.status(200).send({message:'Exam Deleted Successfully'});
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message })
        }
    }
}