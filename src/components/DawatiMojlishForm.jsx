"use client";
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  initialFormData,
  validationSchema,
} from "@/app/data/DawatiMojlishData";

const DawatiMojlishForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="mx-auto mt-8 w-full rounded bg-white p-10 shadow-lg">
      <h2 className="mb-6 text-2xl">দাওয়াতি মজলিশ</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block text-gray-700">
                দাওয়াতের গুরুত্ব ও প্রয়োজনীয়তা নিয়ে মজলিস হয়েছে
              </label>
              <Field
                name="dawatterGuruttoMojlish"
                placeholder="Enter value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="dawatterGuruttoMojlish"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                দাওয়াতের গুরুত্ব ও প্রয়োজনীয়তা মজলিসে মোট অংশগ্রহণ
              </label>
              <Field
                name="mojlisheOnshogrohon"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="mojlisheOnshogrohon"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                দাওয়াত প্রশিক্ষণ কর্মশালার আয়োজন হয়েছে
              </label>
              <Field
                name="prosikkhonKormoshalaAyojon"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="prosikkhonKormoshalaAyojon"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                দাওয়াত প্রশিক্ষণ কর্মশালায় মোট অংশগ্রহণ{" "}
              </label>
              <Field
                name="prosikkhonOnshogrohon"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="prosikkhonOnshogrohon"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                জুমার মজলিসে আলোচনা হয়েছে
              </label>
              <Field
                name="jummahAlochona"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />
              <ErrorMessage
                name="jummahAlochona"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                ধর্ম সবার আয়োজন হয়েছে
              </label>
              <Field
                name="dhormoSova"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="dhormoSova"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">
                দাওয়াতের মাশওয়ারা পয়েন্ট চালু হয়েছে
              </label>
              <Field
                name="mashwaraPoint"
                placeholder="Enter Value"
                className="w-full rounded border border-gray-300 px-4 py-2 mb-3"
              />

              <ErrorMessage
                name="mashwaraPoint"
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
        </Form>
      </Formik>
    </div>
  );
};

export default DawatiMojlishForm;