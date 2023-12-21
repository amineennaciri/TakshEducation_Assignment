import {useState} from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';

function CreateMcqs() {
    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);
    const [option0, setOption0] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [correctOptionIndex, setCorrectOptionIndex] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const { examId } = useParams();
    const handleSaveMCQs= () => {
        setOptions([option0,option1,option2,option3]);
        const data = {
            question,
            options,
            correctOptionIndex,
        };
        console.log(data);
        setLoading(true);
        axios.post(`http://localhost:8000/exams/${examId}/addmcq`, data)
        .then(()=>{
            setLoading(false);
            enqueueSnackbar('MCQs created successfully', { variant : 'success'})
            navigate(`/exams/${examId}/mcqs`);
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
    <h1 className='text-3xl my-4'>Create MCQs</h1>
    {loading ? <Spinner/> 
    : ''}
    <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
            <label className='text-xl mr-4 text-gray-500'>Question</label>
            <input type="text" value={question} onChange={(e)=> setQuestion(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full" />
        </div>
        <div className='my-4'>
            <label className="text-xl mr-4 text-gray-500">Option 0</label>
            <input type="text" value={option0} onChange={(e)=>setOption0(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
            <label className="text-xl mr-4 text-gray-500">Option 1</label>
            <input type="text" value={option1} onChange={(e)=>setOption1(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
            <label className="text-xl mr-4 text-gray-500">Option 2</label>
            <input type="text" value={option2} onChange={(e)=>setOption2(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
            <label className="text-xl mr-4 text-gray-500">Option 3</label>
            <input type="text" value={option3} onChange={(e)=>setOption3(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <div className='my-4'>
            <label className="text-xl mr-4 text-gray-500">Correct option index (choose a value between 0 and 3)</label>
            <input type="number" min="0" max="3" step="1" value={correctOptionIndex} onChange={(e)=>setCorrectOptionIndex(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveMCQs}>
            Save
        </button>
    </div>
</div>
  )
}

export default CreateMcqs