import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

function ShowExam() {
  const [exam, setExam] = useState({});
  const [loading, setLoading] = useState(false);
  const { examId } = useParams();
  console.log(examId);

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:8000/exams/${examId}`)
    .then((response) =>{
      console.log(response.data);
      setExam(response.data);
        setLoading(false);
    })
    .catch((error)=>{
        console.log(error);
        setLoading(false);
    })
  }, [])

  return (
      <div className='p-4'>
          <BackButton />
          <h1 className='text-3xl my-4'>Show Exam</h1>
          {
              loading ? (
                  <Spinner/>
              ) : (
                  <div className = 'flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Id
                          </span>
                          <span>
                              {exam._id}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Title
                          </span>
                          <span>
                              {exam.title}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Duration
                          </span>
                          <span>
                              {exam.duration}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Time of creation
                          </span>
                          <span>
                              {new Date(exam.timestamp).toString()}
                          </span>
                      </div>
                  </div>
              )
          }
      </div>
  )
}

export default ShowExam