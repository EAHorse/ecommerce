import * as Yup from 'yup';

let userSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  telephone: Yup.string().required('Telephone is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('email'), null], 'Emails must match')
    .required('Confirm Email is required'),
});

const formValidate = async (formData) => {
  try {
    await userSchema.validate(formData, { abortEarly: false });
    return { status: 'success' };
  } catch (error) {
    return { status: 'error', message: error.errors.join(', ') };
  }
};

export default formValidate;
