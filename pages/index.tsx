import React, { useState } from "react";
import { useSupabase } from "use-supabase";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Layout } from "../components/Layout";
import { supabase } from '../lib/supabase';
import Explore from "../components/Explore";
import Auth from "../components/Auth";
import { useAuth } from "../lib/useAuth";
import useSWR from 'swr';

const fetcher = (url) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin',
  }).then((res) => res.json());

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  const { user } = useAuth();
 // const { data, error } = useSWR(user ? '/api/getUser' : null, fetcher);

  return (
    <div >
  
    {!user ? (
      
    <div>
          <Layout width="max-w-xl" className="h-screen mt-36">
        
            <h4 className="mb-4">Sign in to Affordance</h4>
          
            <Auth/>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await user.signIn({ email });
              }}>
        <div className="flex items-center space-x-2">
          <Input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Button type="submit" color="black">
            Continue
          </Button>
        </div>
        <div className="grid grid-cols-2 items-center gap-2 mt-5">
          <Button
            onClick={async () =>
            { supabase.auth.signIn({ provider: 'google' })  
        }}
            
          > Join with Google</Button>
          <Button
           onClick={async () =>
            { supabase.auth.signIn({ provider: 'github' }) }}
          ><img src="static/github.svg" className="px-2 py-1" /> Or Join with GitHub</Button>
        </div>
        <p className="small mt-3 text-gray">
          By logging in, you agree to the{" "}
          <a href="#" className="text-black">
            Terms of Service
          </a>
          .
        </p>
        </form>
        </Layout>

        </div>) : (
        <div>
            <Explore />
             <div className="grid gap-3 mt-8 mx-auto">
                <Button onClick={() => supabase.auth.signOut()} color = "black" > Sign Out</Button>
    <p>You're signed in. Email: {user.email}  </p>
             </div>
            
            
        </div>
      )}
    
    </div>
  );
};

export default Index;
