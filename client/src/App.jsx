import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import CreateExam from './pages/CreateExam.jsx';
import EditExam from './pages/EditExam.jsx';
import DeleteExam from './pages/DeleteExam.jsx';
import ShowExam from './pages/ShowExam.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/addexam' element={<CreateExam />}/>
      <Route path='/exams/edit/:examId' element={<EditExam />}/>
      <Route path='/exams/delete/:examId' element={<DeleteExam />}/>
      <Route path='/exams/details/:examId' element={<ShowExam />}/>
    </Routes>
  )
}

export default App