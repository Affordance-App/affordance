import { Form, Formik } from "formik";
import React, { useContext, createContext, useState} from "react";
import { Button } from "../components/Button";
import { Input, InputField } from "../components/Input";
import { Layout } from "../components/Layout";
import Link from "next/link";
import { supabaseClient } from '../lib/supabase'
import { Context } from "../lib/useContext";

type User = {
  id?: boolean
  user: any
}

export default function  Apply({ user } : User ) {
  
   const [newTaskText, setNewTaskText] = useContext(Context);
  const [todos, setTodos] = useState([])
  const [errorText, setError] = useState('')
  
  const addTodo = async (taskText: string) => {
    let task = taskText.trim()
    if (task.length) {
      let { data: todo, error } = await supabaseClient
        .from('projects')
        .insert({ task, user_id: user.id })
        .single()
      if (error) setError(error.message)
      else setTodos([...todos, todo])
    }
  }
  return (
    <Layout width="max-w-2xl w-full h-screen">
      <h4>Apply for Affordance</h4>
      <p className="text-gray">One application to attract multiple investors</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          url: "",
          revenue: "",
          twitter: "",
          description: "",
        }}
        onSubmit={() => {}}
      >
        {() => (
          <Form className="grid gap-3 mt-8 mx-auto">
            <div className="flex space-x-3">
              <InputField
                placeholder="Name"
                name="name"
                value={newTaskText}
                onChange={(e) => {
                setError('')
                setNewTaskText(e.target.value)
          }}
              />
              <InputField
                placeholder="Email Address"
                name="email"
                type="email"
              />
            </div>
            <InputField placeholder="Website, Appstore, etc." name="url" />
            <InputField placeholder="Yearly Revenue/Raising" name="revenue" />
            <InputField placeholder="@Twitter Username" name="twitter" />
            <Input placeholder="Upload Startup Image — 5MB Max" />
            <InputField
              placeholder="Startup Description"
              name="description"
              className="h-36"
              textarea
            />
             <Link href="/">
              <Button
                onClick={() => addTodo(newTaskText)}
                color="black">Submit Application</Button>
            </Link>
            <p className="text-gray small">
              We’ll get back to you in a{" "}
              <span className="text-black">few days</span>.
            </p>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

 