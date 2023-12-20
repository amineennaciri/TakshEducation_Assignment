import {useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

function DeleteExam() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const {examId} = useParams();
  const handleDeleteExam = () => {
      setLoading(true);
      axios.delete(`http://localhost:8000/exams/${examId}`)
      .then(()=>{
          setLoading(false);
          enqueueSnackbar('Exam deleted successfully', { variant : 'success'})
          navigate('/');
      })
      .catch((error)=>{
          setLoading(false);
          enqueueSnackbar('Error', { variant : 'error'})
          console.log(error);
      })
  };

  return (
      <div className='p-4'>
          <BackButton />
          <h1 className='text-3xl my-4'>Delete Exam</h1>
          {loading ? <Spinner/> 
          : ''}
          <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
              <h3 className='text-2xl'>Are you sure you want to delete this exam?</h3>
              <button className='p-4 bg-red-600 m-8 w-full' onClick={handleDeleteExam}>
                  Yes, Delete it
              </button>
          </div>
      </div>
  )
}

export default DeleteExam