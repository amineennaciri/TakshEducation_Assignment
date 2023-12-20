import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';

function EditExam() {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {examId} = useParams();
    console.log(`http://localhost:8000/exams/${examId}`);
    useEffect(()=>{
        setLoading(true);
        axios.get(`http://localhost:8000/exams/${examId}`)
        .then((response)=>{
            setDuration(response.data.duration);
            setTitle(response.data.title);
            setLoading(false);
        }).catch((error)=>{
            setLoading(false);
            alert('An error happened. Please check console');
            console.log(error);
        })
    },[])
    const handleEditExam = () => {
        const data = {
            title,
            duration
        };
        setLoading(true);
        axios.put(`http://localhost:8000/exams/${examId}`, data)
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
            <h1 className='text-3xl my-4'>Edit Exam</h1>
            {loading ? <Spinner/> 
            : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}
                    className="border-2 border-gray-500 px-4 py-2 w-full" />
                </div>
                <div className='my-4'>
                    <label className="text-xl mr-4 text-gray-500">Author</label>
                    <input type="number" value={duration} onChange={(e)=>setDuration(e.target.value)} className='border-2 border-gray-500 px-4 py-2 w-full' />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditExam}>
                    Save
                </button>
            </div>
        </div>
    )
}

export default EditExam