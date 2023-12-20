import {useState} from 'react';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

function CreateExam() {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveExam = () => {
        const data = {
            title,
            duration,
        };
        setLoading(true);
        axios.post('http://localhost:8000/addexam', data)
        .then(()=>{
            setLoading(false);
            navigate('/');
        })
        .catch((error)=>{
            setLoading(false);
            alert('An error happened. Please check console');
            console.log(error);
        })
    };

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Create Exam</h1>
            {loading ? <Spinner/> 
            : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <div className='my-4'>
                    <label className="text-xl mr-4 text-gray-500">Duration</label>
                    <input type="number" value={duration} onChange={(e)=>setDuration(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveExam}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default CreateExam