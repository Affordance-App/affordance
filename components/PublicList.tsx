import { useState, useEffect } from 'react'
import { supabase } from '../lib/initSupabase'
import Profiles from './Profiles'

type User = {
  id?: boolean
  user: any
}

// username  
type Profile = {
  id: number
  name: string
}

interface Props {
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = (props: Props) => {
  return (
    <div> 
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={props.onChange}
      />
    </div>
  );
};

export default function Todos({ user }: User) {
  const [todos, setTodos] = useState([])
  const [newTaskText, setNewTaskText] = useState('')
  const [errorText, setError] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
//    let { data: todos, error } = await supabase.from('todos').select('*').order('id', true)
    let { data: todos, error } = await supabase.from('todos').select('*').order('id', { ascending: true }) 
    
    if (error) console.log('error', error)
    else setTodos(todos)
  }
  const addTodo = async (taskText: string) => {
    let task = taskText.trim()
    if (task.length) {
      let { data: todo, error } = await supabase
        .from('todos')
        .insert({ task, user_id: user.id })
        .single()
      if (error) setError(error.message)
      else setTodos([...todos, todo])
    }
  }

  const deleteTodo = async (id: any) => {
    try {
      await supabase.from('todos').delete().eq('id', id)
      setTodos(todos.filter((x) => x.id != id))
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="w-full">
      <Profiles user={supabase.auth.user()} />
      
      <h1 className="mb-12">Project</h1>

     
      <div className="flex gap-2 my-2">
        <input
          className="rounded w-full p-2"
          type="text"
          placeholder="make coffee"
          value={newTaskText}
          onChange={(e) => {
            setError('')
            setNewTaskText(e.target.value)
          }}
        />
        <button className="btn-black" onClick={() => addTodo(newTaskText)}>
          Create
        </button>
      </div>
      {!!errorText && <Alert text={errorText} />}
      <div className="shadow overflow-hidden rounded-md">
        <div className="grid gap-4 grid-rows-4 md:grid-cols-2  my-2">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} onDelete={() => deleteTodo(todo.id)} />
          ))}
        </div>
      </div>
    </div>
  )
}

const Todo = ({ todo, onDelete }) => {
  const [isCompleted, setIsCompleted] = useState(todo.is_complete)
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
               toggle()
    //  setIsCompleted(e.target.checked);
  };
  const toggle = async () => {
    try {
      const { data, error } = await supabase
        .from('todos')
        .update({ is_complete: !isCompleted })
        .eq('id', todo.id)
        .single()
      if (error) {
//        throw new Error(error)
        alert(error)
      }
      setIsCompleted(data.is_complete)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div
      onClick={(e) => {
        e.preventDefault()
        toggle()
      }}
      className="w-full block cursor-pointer rounded p-2 bg-white hover:bg-gray-200 focus:outline-none focus:bg-gray-200 transition duration-150 ease-in-out"
    >
      <div className="flex items-center  px-4 py-4 sm:px-6">
        <div className="min-w-0 flex-1 flex items-center">
          <div className="text-sm block leading-5 truncate">
            <p className="text-lg uppercase font-medium">{todo.task}</p> 
            <p>{todo.description}</p></div>
        </div>
        <div>
          {/* <input
            className="cursor-pointer"
            onChange={(e) => toggle()}
            type="checkbox"
            checked={todo.is_complete}
          /> */}
           <Checkbox isChecked={isCompleted} onChange={handleCheck}/>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onDelete()
          }}
          className="w-4 h-4 ml-2 border-2 hover:border-black rounded"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gray">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

const Alert = ({ text }) => (
  <div className="rounded-md bg-red-100 p-4 my-3">
    <div className="text-sm leading-5 text-red-700">{text}</div>
  </div>
)
