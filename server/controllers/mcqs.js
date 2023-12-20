const MCQ = require('./../models/mcqs');
const { ObjectId } = require('mongodb');

module.exports = {
    postMCQ: async (req, res)=>{
        try {
            if(
                !req.body.question ||
                !req.body.options  ||
                !req.body.correctOptionIndex
            ){
                return res.status(500).send({
                    message: "Send all required fields: question, options, correctOptionIndex"
                })
            }
            const mcq = new MCQ({
                question: req.body.question,
                options: req.body.options,
                correctOptionIndex: req.body.correctOptionIndex,
                author: new ObjectId(req.params.examId),
              });
              const result = await mcq.save();
              return res.status(201).send(result);   
        } catch (error) {
            console.log(error.message);
            res.status(500).send({message: error.message});
        }
    },
    getMCQs: async (req, res)=>{
        try {
            const mcqs = await MCQ.find({author:new ObjectId(req.params.examId)});
            return res.status(200).json({
                count: mcqs.length,
                data: mcqs
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message })
        }
    },
    getOneMCQs: async (req, res)=>{
        try {
            const mcq = await MCQ.find({author:new ObjectId(req.params.examId)}).findOne(new ObjectId(req.params.mcqId));

            if(!mcq){
                return res.status(404).json({
                    message: 'MCQ not found'
                });
            }
            return res.status(200).json(mcq);
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message })
        }
    },
    updateMCQ: async (req, res)=>{
        try {
            if(
                !req.body.question ||
                !req.body.options  ||
                !req.body.correctOptionIndex
            ){
                return res.status(400).send({
                    message: "Send all required fields: question, options, correctOptionIndex"
                })
            }
            const mcq = await MCQ.find({author:new ObjectId(req.params.examId)}).findOne(new ObjectId(req.params.mcqId));
            const mcqIdToUpdate = mcq.id;
            const result = await MCQ.findByIdAndUpdate(mcqIdToUpdate, req.body);
            if (!result){
                return res.status(404).json({
                    message: 'MCQ not found'
                });
            }
            return res.status(200).send({message:'MCQ Updated Successfully'});
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message })
        }
    },
    deleteMCQ: async (req, res)=>{
        try {
            const mcq = await MCQ.find({author:new ObjectId(req.params.examId)}).findOne(new ObjectId(req.params.mcqId));
            const mcqIdToUpdate = mcq.id;
            const result = await MCQ.findByIdAndDelete(mcqIdToUpdate, req.body);
            if (!result){
                return res.status(404).json({
                    message: 'MCQ not found'
                });
            }
            return res.status(200).send({message:'MCQ Deleted Successfully'});
        } catch (error) {
            console.log(error.message);
            res.status(500).send({ message: error.message })
        }
    }
}