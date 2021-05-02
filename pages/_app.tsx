import { AppProps } from "next/app";
import React from "react";
import { SupabaseContextProvider } from "use-supabase";
import { supabase } from "../lib/supabase";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SupabaseContextProvider client={supabase}>
      <Component {...pageProps} />
    </SupabaseContextProvider>
  );
}

export default MyApp;
