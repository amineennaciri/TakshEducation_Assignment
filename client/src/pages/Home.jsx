import React from 'react';
import axios from 'axios';
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md';
import ExamsTable from '../home/ExamsTable.jsx';
import ExamsCard from '../home/ExamsCard.jsx';

function Home() {
  const [exams, setExams] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [showType, setShowType] = React.useState('table');
  React.useEffect(()=>{
    setLoading(true);
    axios.get('http://localhost:8000/exams')
    .then((response)=>{
      setExams(response.data.data);
        setLoading(false);
    })
    .catch((error)=>{
        console.log(error);
        setLoading(false);
    })
},[])
  return (
    <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                onClick={()=> setShowType('table')}>
                    Table
                </button>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                onClick={()=> setShowType('card')}>
                    Card
                </button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>
                    Exams List
                </h1>
                <Link to={'/addexam'}>
                    <MdOutlineAddBox className='text-sky-800 text-4xl'/>
                </Link>
            </div>
            {
                loading? 
                    <Spinner/>
                : showType ==='table'?(
                    <ExamsTable exams={exams}/>
                ):(
                    <ExamsCard exams={exams}/>
                )
            }
    </div>
  )
}

export default Home