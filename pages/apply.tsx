import { Form, Formik } from "formik";
import React from "react";
import { Button } from "../components/Button";
import { Input, InputField } from "../components/Input";
import { Layout } from "../components/Layout";

const Apply: React.FC = () => {
  return (
    <Layout width="max-w-2xl w-full h-screen">
      <h4>Apply for Affordance</h4>
      <p className="text-gray">One application to attract multiple investors</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          url: "",
          revenue: "",
          twitter: "",
          description: "",
        }}
        onSubmit={() => {}}
      >
        {() => (
          <Form className="grid gap-3 mt-8 mx-auto">
            <div className="flex space-x-3">
              <InputField placeholder="Name" name="name" />
              <InputField
                placeholder="Email Address"
                name="email"
                type="email"
              />
            </div>
            <InputField placeholder="Website, Appstore, etc." name="url" />
            <InputField placeholder="Yearly Revenue/Raising" name="revenue" />
            <InputField placeholder="@Twitter Username" name="twitter" />
            <Input placeholder="Upload Startup Image — 5MB Max" />
            <InputField
              placeholder="Startup Description"
              name="description"
              className="h-36"
              textarea
            />
            <Button color="black">Submit Application</Button>
            <p className="text-gray small">
              We’ll get back to you in a{" "}
              <span className="text-black">few days</span>.
            </p>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default Apply;
