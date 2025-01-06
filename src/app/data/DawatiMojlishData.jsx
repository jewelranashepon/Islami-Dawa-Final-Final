import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  dawatterGuruttoMojlish: "",
  mojlisheOnshogrohon: "",
  prosikkhonKormoshalaAyojon: "",
  prosikkhonOnshogrohon: "",
  jummahAlochona: "",
  dhormoSova: "",
  mashwaraPoint: "",
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  dawatterGuruttoMojlish: Yup.string().required(
    "Dawat Mojlish Field is required"
  ),
  mojlisheOnshogrohon: Yup.string().required("Dawat Gurutto Field is required"),
  prosikkhonKormoshalaAyojon: Yup.string().required(
    "Dawat Prosikkhon Field is required"
  ),
  prosikkhonOnshogrohon: Yup.string().required(
    "Dawat Kormosala Field is required"
  ),
  jummahAlochona: Yup.string().required("Jumar Mojlish Field is required"),
  dhormoSova: Yup.string().required("Dhormo Sova Field is required"),
  mashwaraPoint: Yup.string().required("MashwaraPoint Field is required"),
});
