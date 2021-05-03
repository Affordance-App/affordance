import React from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Layout } from "../components/Layout";

const Apply: React.FC = () => {
  return (
    <Layout width="max-w-2xl w-full">
      <h4>Apply for Affordance</h4>
      <p className="text-gray">One application to attract multiple investors</p>
      <form className="grid gap-3 mt-8 mx-auto">
        <div className="flex space-x-3">
          <Input placeholder="Name" />
          <Input placeholder="Email Address" type="email" />
        </div>
        <Input placeholder="Website, Appstore, etc." />
        <Input placeholder="Yearly Revenue/Raising" />
        <Input placeholder="@Twitter Username" />
        <Input placeholder="Upload Startup Image — 5MB Max" />
        <Input placeholder="Startup Description" className="h-36" textarea />
        <Button color="black">Submit Application</Button>
        <p className="text-gray small">
          We’ll get back to you in a{" "}
          <span className="text-black">few days</span>.
        </p>
      </form>
    </Layout>
  );
};

export default Apply;
