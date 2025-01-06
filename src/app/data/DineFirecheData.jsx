import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  omuslimKalemaPoreche: "",
  murtadDineFireasa: "", 
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  omuslimKalemaPoreche: Yup.string().required("This Field is required"),
  murtadDineFireasa: Yup.string().required("This Field is required"),
  
});


