import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { supabase } from "../lib/supabase";

const Index: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <Layout width="max-w-lg">
      <h4>Sign in to Affordance</h4>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await supabase.auth.signIn({ email });
        }}
      >
        <input
          type="email"
          placeholder="Email Address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <button type="submit">Continue</button>
      </form>
    </Layout>
  );
};

export default Index;
