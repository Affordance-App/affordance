import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useAuth } from "../lib/useAuth";

export default function Auth() {
  const [email, setEmail] = useState('');
  const { user } = useAuth();

  async function handleOAuthLogin(provider) {
    let { error } = await supabase.auth.signIn({ provider });
    if (error) alert(error.message);
  }


  return (
    <div>
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
          <Button onClick={() => handleOAuthLogin('google')} type="button">
            <p className="font-medium px-1">Join with</p>Google
            <img src="static/google.svg" className="px-2 py-1" />
            </Button>
          <Button onClick={() => handleOAuthLogin('github')} type="button" >
            <p className="font-medium px-1">Or use </p> GitHub
           <img src="static/github.svg" className="px-2 py-1" />
          </Button>
        </div>
        <p className="small mt-3 text-gray">
          By logging in, you agree to the{" "}
          <a href="#" className="text-black">
            Terms of Service
          </a>
          .
        </p>
        </form>

  
    </div>
  );
}