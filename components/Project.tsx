import { supabaseClient } from '../lib/supabase'
import React, { useState, useEffect } from 'react'

interface ProjectProps {

  todo?: any;
  onDelete?: any;

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

export const Project: React.FC<ProjectProps> = ({  todo, onDelete  }) => {
  const [isCompleted, setIsCompleted] = useState(todo.is_complete)
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
               toggle()
    //  setIsCompleted(e.target.checked);
  };
  const toggle = async () => {
    try {
      const { data, error } = await supabaseClient
        .from('projects')
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
  <div className="block">
       
      <img
        style={{  borderRadius: "8px" }}
        width="420" height="120"
        src="https://github.com/coderinblack08/presage/raw/develop/web/public/static/github-thumbnail.png" />
    </div>
        <div>
       
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