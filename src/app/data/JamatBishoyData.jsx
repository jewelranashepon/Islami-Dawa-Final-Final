import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  jamatBerHoise: "",
  jamatSathi: "",
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  jamatBerHoise: Yup.number().required("Jamat Field is required"),
  jamatSathi: Yup.string().required("Jamat Sathi Field is required"),
  
});


