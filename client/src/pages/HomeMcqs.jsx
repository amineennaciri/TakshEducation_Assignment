import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import DisplayMcqs from '../homeMcqs/DisplayMcqs';

function HomeMcqs() {
    const [mcqsData, setMcqsData] = useState({});
  const [loading, setLoading] = useState(false);
  const { examId } = useParams();

  useEffect(()=>{
    setLoading(true);
    axios.get(`http://localhost:8000/exams/${examId}/mcqs`)
    .then((response) =>{
      console.log(response.data.data);
      setMcqsData(response.data.data);
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
              ) : 
              mcqsData.map((el)=>(
                    <DisplayMcqs key={el._id} mcq={el}/>
                ))
          }
      </div>
  )
}

export default HomeMcqs