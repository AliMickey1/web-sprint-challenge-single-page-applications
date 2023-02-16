import * as yup from 'yup';

export const formSchema = yup.object().shape({
    custName: yup
    .string()
    .trim()
    .min(2, "name must be at least 2 characters")
    .required("name must be at least 2 characters"), 

  });

