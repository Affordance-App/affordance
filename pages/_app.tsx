import { AppProps } from "next/app";
import React from "react";
import { SupabaseContextProvider } from "use-supabase";
import { supabaseClient } from "../lib/supabase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SupabaseContextProvider client={supabaseClient}>
      <Component {...pageProps} />
    </SupabaseContextProvider>
  );
}

export default MyApp;
