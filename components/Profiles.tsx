import { useState, useEffect } from 'react'
import { supabase } from '../lib/initSupabase'

type User = {
  id?: boolean
  user: any
}

type Profile = {
  id: number
  name: string
}

type PostgrestError = {
  message: string
  details: string
  hint: string
  code: string
}



export default function Todos({ user }: User) {
  const [todos, setTodos] = useState([])
  const [newTaskText, setNewTaskText] = useState('')
  const [errorText, setError] = useState('')

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const activeUser = supabase.auth.user();
    // return if user session
     const session = supabase.auth.session();
    let { data: todos, error } = await supabase.from('todos').select('*').order('id', { ascending: true }).eq('user_id', activeUser.id)   
   // console.log(session, todos.map((user_id) => user_id))
      
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

   const activeUser = supabase.auth.user();
   
  const fetchUser = async (user_id: any) => {
    try {
      await supabase.from('todos').select('*').eq('user_id', user_id)
      //setTodos(todos.filter((x) => x.user_id == user_id))
      setTodos(todos.filter((x) => x.user_id == activeUser.id))
    } catch (error) {
      console.log('error', error)
    }
  }


  return (
    <div className="w-full">
      <h1 className="mb-12">People</h1>
 
      <div className="text-semibold text-purple-600">
        {/* current user {activeUser.email} is online :
      */}
        
        {todos.map((todo) => (<div key={todo.id}>{todo.user_id}</div>))}
      
      </div>

     </div>
  )
}
