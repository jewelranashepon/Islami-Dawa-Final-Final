import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  nonMuslimDawat: "",
  murtadDawat: "",
  alemderSatheyMojlish: "",
  publicSatheyMojlish: "",
  nonMuslimSaptahikGasht: "",
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  nonMuslimDawat: Yup.string().required("Dawat Mojlish Field is required"),
  murtadDawat: Yup.string().required("Dawat Gurutto Field is required"),
  alemderSatheyMojlish: Yup.string().required(
    "Dawat Prosikkhon Field is required"
  ),
  publicSatheyMojlish: Yup.string().required(
    "Dawat Kormosala Field is required"
  ),
  nonMuslimSaptahikGasht: Yup.string().required(
    "Jumar Mojlish Field is required"
  ),
});
