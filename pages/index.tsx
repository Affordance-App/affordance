import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { supabase } from '../lib/supabase';
import Explore from "../components/Explore";
import Auth from "../components/Auth";
import { useAuth } from "../lib/useAuth";
import { Button } from "../components/Button"; 

const Index: React.FC = () => {
  const { user } = useAuth();

  return (
    <div >
  
    {!user ? (
        <div>
          <Layout width="max-w-xl" className="h-screen mt-36" >
        
            <h4 className="mb-4">Sign in to Affordance</h4>
          
            <Auth/>
     
          </Layout>
        </div>) : (
        <div>
          
            <Explore />            
        </div>
      )}
    
    </div>
  );
};

export default Index;
