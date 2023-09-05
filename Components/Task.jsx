
function Task({title,description,deleteBtn,index}) {

  return (
    <div className='task'>
        <div>

            <p>{title}</p>
            <span>{description}</span>

        </div>

        <button onClick={()=>deleteBtn(index)}>-</button>
    </div>
  )
}

export default Task