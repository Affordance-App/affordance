import React, { useState, useEffect, useContext } from 'react'
import { supabaseClient } from '../lib/supabase'
import { Button } from './Button'
import { Input } from './Input'
import { Project } from './Project'
import { Context } from "../lib/useContext";
import { useAuth } from "../lib/useAuth";


export default function Feed() {
  const { user } = useAuth();
  const [todos, setTodos] = useState([])
  const [newTaskText, setNewTaskText] = useState('')
  const [errorText, setError] = useState('')

 
  const { value, setValue } = useContext(Context)

  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
//    let { data: todos, error } = await supabase.from('todos').select('*').order('id', true)
    let { data: todos, error } = await supabaseClient.from('projects').select('*').order('id', { ascending: true }) 
    
    if (error) console.log('error', error)
    else setTodos(todos)
  }


  const deleteTodo = async (id: any) => {
    try {
      await supabaseClient.from('projects').delete().eq('id', id)
      setTodos(todos.filter((x) => x.id != id))
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="w-full " >
      
     <div className="overflow-hidden" >
        <div className="grid sm:grid-cols-2 grid-col-1 gap-4 justify-center  my-5">
          
          {todos.map((todo) => ( 
            <Project key={todo.id} todo={todo} onDelete={() => deleteTodo(todo.id)} />
          ))}
        </div>
      </div>

            {!!errorText && <Alert text={errorText} />}
        {/*
        Submit Project from dashboard
        <div className="flex gap-2 my-2">
        <Input
          className="rounded w-full p-2"
          type="text"
          placeholder="create project"
          value={newTaskText}
          onChange={(e) => {
            setError('')
            setNewTaskText(e.target.value)
          }}
        />
        <Button color="black" onClick={() => addTodo(newTaskText)}>
          Create
        </Button>
        </div> */}

    </div>
  )
}

 

const Alert = ({ text }) => (
  <div className="rounded-md bg-red-100 p-4 my-3">
    <div className="text-sm leading-5 text-red-700">{text}</div>
  </div>
)
