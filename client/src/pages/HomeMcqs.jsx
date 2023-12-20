import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import OrderedList from '../homeMcqs/OrderedList';

function HomeMcqs() {
    const [mcqs, setMcqs] = useState({});
  const [loading, setLoading] = useState(false);
  const { examId } = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:8000/exams/${examId}/mcqs`)
    .then((response) =>{
      console.log(response.data.data);
      setMcqs(response.data.data[0]);
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
          <h1 className='text-3xl my-4'>Show All MCQs</h1>
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
                              {mcqs._id}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Title
                          </span>
                          <span>
                              {mcqs.question}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Options
                          </span>
                          {mcqs.options}
                          {/*<ol className="list-decimal">
                             {mcqs.options.map((el,index)=>(
                                <li key={index}>{el}</li>
                              ))}
                            </ol> */}
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              MCQ's Answer Index
                          </span>
                          <span>
                          {mcqs.correctOptionIndex+1}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Exam's Id
                          </span>
                          <span>
                          {mcqs.author}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Time of creation
                          </span>
                          <span>
                              {new Date(mcqs.timestamp).toString()}
                          </span>
                      </div>
                  </div>
              )
          }
      </div>
  )
}

export default HomeMcqs