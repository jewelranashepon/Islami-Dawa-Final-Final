import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  sohojogiDayeToiri: "",
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  sohojogiDayeToiri: Yup.number().required("Sohojogi Dayee Field is required"),
});
