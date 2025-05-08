import * as YUP from 'yup'

export const SchemaInp = YUP.object().shape({
    name : YUP
    .string()
    .required('Please, fill this field'),
    userName : YUP
    .string()
    .min(4 , 'User name min length is 4')
    .max(8 , 'User name max length is 8')
    .required('Please, fill this field'),
    email : YUP
    .string()
    .email('Invalid mail')
    .required('Please, fill this field'),
    password : YUP
    .string()
    .min(5 , 'Password min length is 5')
    .max(10 , 'Password max length is 10'),
    repPassword : YUP
    .string()
    .oneOf([YUP.ref('password')] , 'Wrong password')
    .required('Please, fill this field')
})