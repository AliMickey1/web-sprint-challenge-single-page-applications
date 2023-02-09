import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    cname: Yup
    .string()
    .min(2, "name must be at least 2 characters")
    .required("Must be your name"), 

  });

  


  export default formSchema;
