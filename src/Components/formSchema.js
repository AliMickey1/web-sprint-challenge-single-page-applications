import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    'name-input': Yup
    .string()
    .trim()
    .min(2, "name must be at least 2 characters")
    .required("name must be at least 2 characters"), 

  });

  


  export default formSchema;
