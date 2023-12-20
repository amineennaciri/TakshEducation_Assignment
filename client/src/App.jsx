import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateExam from './pages/CreateExam.jsx';
import EditExam from './pages/EditExam.jsx';
import DeleteExam from './pages/DeleteExam.jsx';
import ShowExam from './pages/ShowExam.jsx';
import HomeMcqs from './pages/HomeMcqs.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/addexam' element={<CreateExam />}/>
      <Route path='/exams/edit/:examId' element={<EditExam />}/>
      <Route path='/exams/delete/:examId' element={<DeleteExam />}/>
      <Route path='/exams/details/:examId' element={<ShowExam />}/>
      
      <Route path='/exams/:examId/mcqs' element={<HomeMcqs />}/>


    </Routes>
  )
}

export default App