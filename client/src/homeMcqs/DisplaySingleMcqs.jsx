function DisplaySingleMcqs({mcq}) {
  return (
    <div className = 'flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Id
                          </span>
                          <span>
                              {mcq._id}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Title
                          </span>
                          <span>
                              {mcq.question}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Options
                          </span>
                          {/* {mcq.options} */}
                          <ol className="list-decimal">
                             {Array.isArray(mcq.options) && mcq.options.map((el,index)=>(
                                <li key={index}>{el}</li>
                              ))}
                            </ol>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              MCQ's Answer Index
                          </span>
                          <span>
                          {mcq.correctOptionIndex+1}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Exam's Id
                          </span>
                          <span>
                          {mcq.author}
                          </span>
                      </div>
                      <div className='my-4'>
                          <span className='text-xl mr-4 text-gray-500'>
                              Time of creation
                          </span>
                          <span>
                              {new Date(mcq.timestamp).toString()}
                          </span>
                      </div>
                  </div>
  )
}

export default DisplaySingleMcqs