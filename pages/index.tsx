import React, { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Layout } from "../components/Layout";
import { supabase } from "../lib/supabase";

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <Layout width="max-w-xl" className="mt-36">
      <h4 className="mb-4">Sign in to Affordance</h4>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await supabase.auth.signIn({ email });
        }}
      >
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
          <Button>Or Join with Google</Button>
          <Button>Or Join with GitHub</Button>
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
  );
};

export default Index;
