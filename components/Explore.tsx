import { Form, Formik } from "formik";
import React from "react";
import { Button } from "./Button";
import { Input, InputField } from "./Input";
import { supabase } from '../lib/supabase'; 
import { Layout } from './Layout';
import { useAuth } from "../lib/useAuth";
import useSWR from 'swr';
import Link from "next/link";

const fetcher = (url) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
  }).then((res) => res.json());

export default function Explore() {
  
  const { user } = useAuth();
  const { data, error } = useSWR(user ? '/api/getUser' : null, fetcher);
  
  if (!user) {
    return (
      <>
        <p>Hi there!</p>
        <p>You are not signed in.</p>
        <div>
      
        </div>
      </>
    );
  }



  return (
    <Layout width="w-full h-screen max-w-screen-lg  ">
     
      <div className="flex justify-between"> 
      <div className="relative max-w-xs text-gray-600 focus-within:text-gray-800">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
        <img src="/static/search.svg"/>
        </div>
        <Input
          className="w-full pl-8 text-gray-700 placeholder-gray-600 bg-gray-200 rounded-lg shadow-md focus:bg-white"
          type="text"
          placeholder="Search for something" />
      </div>

      <div className="flex space-x-3 ">
        <Button imgUrl="/static/rev.svg"  color="white">Revenue</Button>
        <Button imgUrl="/static/filter.svg" color="white">Stages</Button>
        <Button imgUrl="/static/filter.svg" color="white">Topics</Button>
        <Button imgUrl="/static/filter.svg" color="white">Location</Button>        
      </div>
      </div>
      
      <div className="grid gap-3 mt-8 mx-auto">
        <div className="w-1/2">
          <Button onClick={() => supabase.auth.signOut()} color="black"  > Sign Out</Button>
        </div>    
      
        <Link href="/profile">
          <a>SSR example with   <b> getServerSideProps  ⚡  </b> </a>  
      </Link>
        <div>
       <div>
        <p>You're signed in as: Email: {user.email}</p>
      </div>   
      </div>
      {error && <div>Failed to fetch user!</div>}
      {data && !error ? (
        <div>
            <span> User data retrieved server-side (in API route):</span>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <div>Loading...</div>
        )} 
      
      
      </div>
             
    
    </Layout>
  );
};
