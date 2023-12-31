# TakshEducation_Assignment

# INSTRUCTIONS ON HOW TO RUN THE APP
Notice: run the back end server on port 8000
cd server/config
touch .env
create the following variables:
PORT = 8000
DB_STRING = (insert here your mongodb database link)

Now in order to run the app, go back to the root of the project and Follow the instructions below:


npm install


cd server/


npm install


cd ../client/


npm install


cd ../ && npm start
# Task Details: CRUD API for Exam Management

# Objective:
Design and implement a set of CRUD APIs to facilitate the management of exams and associated multiple-choice questions (MCQs). Your task involves using the MERN stack (MongoDB, Express.js, React.js, Node.js). Additionally, we'd like you to deploy the application on an AWS environment.

# Requirements:
1) Implement CRUD operations for exams, allowing the creation, retrieval, update, and deletion of exam details.
Each exam should include attributes such as a title, duration, and a collection of associated MCQs
2) Develop CRUD operations to manage MCQs, including features for creating, retrieving, updating, and deleting MCQs.
Each MCQ should consist of a question, a set of answer options, the correct answer, and be linked to a specific exam.

# Deployment:
Deploy the application on AWS using industry best practices.
Utilize services such as EC2 for the backend and S3 for file storage (if applicable).
Provide clear documentation on the deployment process.

# Submission Instructions:
Share the link to your GitHub repository containing the complete codebase.
Include detailed documentation explaining how to set up and run the application locally.
Provide a brief yet comprehensive guide on deploying the application on AWS.

# Deadline:
We request the submission of your task within the next 24 Hours. If you encounter any challenges or have questions along the way, don't hesitate to reach out for assistance.