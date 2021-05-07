import { AppProps } from "next/app";
import React from "react";
import { SupabaseContextProvider } from "use-supabase";
import { supabaseClient } from "../lib/supabase";
import "../styles/globals.css";
import { Context } from "../lib/useContext";
import { useState } from "react";


function MyApp({ Component, pageProps }: AppProps) {
  const[value, setValue] = useState<string>("hello");
  
  return (
    <SupabaseContextProvider client={supabaseClient}>
      <Context.Provider value={{ value, setValue }}>
      
        <Component {...pageProps} />
      </Context.Provider>
    </SupabaseContextProvider>
  );
}

export default MyApp;
