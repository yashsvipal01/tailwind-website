import React, { useState } from 'react'
import {X} from 'lucide-react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    
    
    const copyTask =[...task]
    copyTask.push({title,details})

    setTask(copyTask)
    
    
    

    setTitle ('')
    setDetails ('')
    
  }

  const deletenote =(idx)=>{
    const copyTask = [...task]
    copyTask.splice(idx,1)

    setTask(copyTask)
  }

  
  return (
    <div className='h-screen lg:flex bg-black text-white  p-10 '>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}
        className='flex items-start flex-col gap-4 p-10 lg:w-1/2'>
             <h1 className='text-4xl font-bold'> Add Notes..</h1>




{/* FIRST INPUT------------------------------------------------------*/}


         <input 
        type="text" 
        placeholder='Enter Notes Heading'
        className='px-5 py-2 w-full rounded border-2'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value);
          
        }} />





{/* SECOND INPUT------------------------------------------------------*/}





        <textarea 
        type="text" 
        placeholder='Write Details'
        className='px-5 py-2 w-full h-35 rounded border-2'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}/>





        <button className='px-5 py-2 w-full active:scale-95 bg-white text-black rounded border-2'>Add Notes</button>
       
       
      </form>



{/* NOTES-------------------------------------------------------------- */}




      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes..</h1>
        
        <div className='flex flex-wrap gap-5 mt-5 h-full overflow-auto'>
          {task.map(function(ele,idx){
            return <div  key={idx} className=' relative h-50 w-40 rounded-2xl py-8 px-4 text-black bg-cover bg-center
             overflow-hidden line-clamp-2 / 3 bg-[url("https://cdn.pixabay.com/photo/2013/07/13/11/55/notes-158958_1280.png")]'>
              
              <button onClick={()=>{
                deletenote(idx)
              }}
              className='absolute top-8 right-4 bg-red-600 rounded-full p-1'>
                <X size={16} strokeWidth={3} /></button>

              <h1 className='leading-tight text-xl font-bold '>{ele.title}</h1>
              <h3 className='leading-tight mt-2 font-medium text-gray-600'>{ele.details}</h3>
            </div>
          })}

        </div>

      </div>
      
    </div>
  )
}

export default App