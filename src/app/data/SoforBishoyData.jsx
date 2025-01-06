import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  madrasaVisit: "",
  moktobVisit: "",
  schoolCollegeVisit: "",
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  madrasaVisit: Yup.string().required("This Field is required"),
  moktobVisit: Yup.string().required("This Field is required"),
  schoolCollegeVisit: Yup.string().required("This Field is required"),
});


