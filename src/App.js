import styles from './App.module.css'
import { useState } from 'react'
import ToDo from './ToDo'
import { nanoid } from 'nanoid'

function App() {
  const [toDo, setToDo] = useState({})
  const [toDos, setToDos] = useState([])
  const onChange = (e)=> setToDo({text: e.target.value,
                                  id: nanoid() })
  const onSubmit = (e)=> {
    e.preventDefault()
    if (toDo.text==="" || toDo.text.length < 3 || toDo.id===null) {
      return
    } 
    setToDo({text: "",
             id: null})
    setToDos(prev=> [toDo, ...prev]) 
  }

  const removeItem = (e, id)=>{
    setToDos(prev=>{
      return prev.filter(item=>item.id!==id)
    })
  }

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo.text} 
          type='text' 
          placeholder='Write your to do'
          onChange={onChange} required></input>
        <button>Add To Do</button>
      </form>
      <hr/>
      <ul>
        {toDos.map((item, index)=>{
          return <ToDo 
                    text={item.text} 
                    key={index} id={item.id} 
                    removeItem={(e)=>removeItem(e, item.id)}/>})}
      </ul>
    </div>
  )
}

export default App