import {Link} from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import {AiOutlineEdit} from 'react-icons/ai';
import {BsInfoCircle} from 'react-icons/bs';
import { MdOutlineDelete} from 'react-icons/md';

function ExamSingleCard({exam}) {
  return (
                <div key={exam._id}
                    className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'
                >
                    <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>
                        {exam.title}
                    </h2>
                    <h4 className='my-2 text-gray-500'>{exam._id}</h4>
                    <div className='flex justify-start items-center gap-x-2'>
                        <PiBookOpenTextLight className='text-red-300 text-2xl'/>
                        <h2 className='my-1'>{exam.title}</h2>
                    </div>
                    <div className='flex justify-start items-center gap-x-2'>
                        <BiUserCircle className='text-red-300 text-2xl'/>
                        <h2 className='my-1'>{exam.duration}</h2>
                    </div>
                    <div className='flex justify-start items-center gap-x-2 mt-4 p-4'>
                        <Link to={`/exams/details/${exam._id}`}>
                            <BsInfoCircle className='text-2xl text-green-800 hover:text-black'/>
                        </Link>
                        <Link to={`/exams/edit/${exam._id}`}>
                            <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black'/>
                        </Link>
                        <Link to={`/exams/delete/${exam._id}`}>
                            <MdOutlineDelete className='text-2xl text-red-600 hover:text-black'/>
                        </Link>
                    </div>
                </div>
  )
}

export default ExamSingleCard