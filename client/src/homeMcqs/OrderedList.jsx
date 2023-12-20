function OrderedList({listOrdered}) {
  return (
    <>
        <ol className="list-decimal">
            {listOrdered.map((el,index)=>(
                <li key={index}>{el}</li>
            ))}
        </ol> 
    </>
  )
}

export default OrderedList