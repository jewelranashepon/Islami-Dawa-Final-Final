"use client";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialFormData, validationSchema } from "@/app/data/DayeeBishoyData";
import { useRouter } from "next/navigation";

const DayeeBishoyForm = () => {
  const router = useRouter();

  return (
    <div className="mx-auto mt-8 w-full rounded bg-white p-10 shadow-lg">
      <h2 className="mb-6 text-2xl">দায়ী বিষয়</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          // Retrieve email from localStorage
          const email = localStorage.getItem("userEmail");

          // Check if email is available
          if (!email) {
            alert("User email is not set. Please log in.");
            return;
          }

          // Include email in the form data
          const formData = { ...values, email };

          // Send form data to the API
          const response = await fetch("/api/dayi", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
              "Content-Type": "application/json",
            },
          });

          // Handle API response
          if (response.ok) {
            router.push("/dashboard");
            alert("Form submission successful!");
          } else {
            alert("Form submission failed! Try again.");
          }

          console.log(formData);
        }}
      >
        {({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <label className="mb-2 block text-gray-700">
                    সহযোগি দাঈ তৈরি হয়েছে
                  </label>
                  <Field
                    name="sohojogiDayeToiri"
                    placeholder="Enter value"
                    className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
                  />
                  <ErrorMessage
                    name="sohojogiDayeToiri"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="ghost" size="default" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DayeeBishoyForm;
