import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import DisplaySingleMcqs from '../homeMcqs/DisplaySingleMcqs';

function ShowMcqs() {
  const [mcqsData, setMcqsData] = useState({});
  const [loading, setLoading] = useState(false);
  const { examId, mcqId } = useParams();
  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:8000/exams/${examId}/mcqs/${mcqId}`)
    .then((response) =>{
      console.log(response.data);
      setMcqsData(response.data);
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
          <h1 className='text-3xl my-4'>Show MCQ</h1>
          <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>
                    MCQs List
                </h1>
            </div>
            {
              loading ? (
                  <Spinner/>
              ) : 
                <DisplaySingleMcqs mcq={mcqsData}/>
          }
    </div>
  )
}

export default ShowMcqs