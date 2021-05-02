import React from "react";
import { Layout } from "../components/Layout";

const Index: React.FC = () => {
  return (
    <Layout>
      <h4>Sign in to Affordance</h4>
      <input type="text" placeholder="Email Address" />
    </Layout>
  );
};

export default Index;
