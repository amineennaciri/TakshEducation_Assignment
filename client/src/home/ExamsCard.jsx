import ExamSingleCard from "./ExamSingleCard";

function ExamsCard({exams}){
return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exams.map((item)=>(
                <ExamSingleCard key={item._id} exam={item}/>
            ))}
        </div>
    )
}

export default ExamsCard;