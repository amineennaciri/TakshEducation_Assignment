import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateExam from './pages/CreateExam.jsx';
import EditExam from './pages/EditExam.jsx';
import DeleteExam from './pages/DeleteExam.jsx';
import ShowExam from './pages/ShowExam.jsx';
import HomeMcqs from './pages/HomeMcqs.jsx';
import CreateMcqs from './pages/CreateMcqs.jsx';
import ShowMcqs from './pages/ShowMcqs.jsx';
import DeleteMcqs from './pages/DeleteMcqs.jsx';
import EditMcqs from './pages/EditMcqs.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/addexam' element={<CreateExam />}/>
      <Route path='/exams/edit/:examId' element={<EditExam />}/>
      <Route path='/exams/delete/:examId' element={<DeleteExam />}/>
      <Route path='/exams/details/:examId' element={<ShowExam />}/>
      
      <Route path='/exams/:examId/mcqs' element={<HomeMcqs />}/>
      <Route path='/exams/:examId/addmcq' element={<CreateMcqs />}/>
      <Route path='/exams/:examId/mcqs/:mcqId' element={<ShowMcqs />}/>
      <Route path='/exams/:examId/mcqs/delete/:mcqId' element={<DeleteMcqs />}/>
      <Route path='/exams/:examId/mcqs/edit/:mcqId' element={<EditMcqs />}/>


    </Routes>
  )
}

export default App