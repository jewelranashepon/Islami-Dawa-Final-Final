import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  mohilaTalim: "",
  TalimOngshoGrohon: "",
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  mohilaTalim: Yup.string().required("This Field is required"),
  TalimOngshoGrohon: Yup.string().required("This Field is required"),
});
