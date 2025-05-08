import style from './register.module.css'
import { User } from '../user/user'
import { SchemaInp } from '../../schema/schema'
import { Formik , Form , Field, ErrorMessage } from 'formik'
import { useState } from 'react'

export function Register ({data}) {

    const [arr , setArr] = useState(data)
    return (
        <div className={style.register}>
            
            <Formik
            initialValues={{
                name : '',
                userName : '',
                email : '',
                password : '',
                repPassword : ''
            }}
            onSubmit={(val) => {
                setArr((prev) => [...prev,val])
            }}
            validationSchema={SchemaInp}>

                {
                    () => (
                    <Form className='regForm'>
                        <Field className = {style.inputs} placeholder='Name' name='name'/>
                        <ErrorMessage name='name'>
                            {(msg) => <p className={style.inpError}>{msg}</p>}
                        </ErrorMessage>

                        <Field className = {style.inputs} placeholder='User Name' name='userName'/>
                        <ErrorMessage name='userName'>
                            {(msg) => <p className={style.inpError}>{msg}</p>}
                        </ErrorMessage>

                        <Field className = {style.inputs} placeholder='Email' name='email'/>
                        <ErrorMessage name='email'>
                            {(msg) => <p className={style.inpError}>{msg}</p>}
                        </ErrorMessage>

                        <Field className = {style.inputs} placeholder='Password' name='password'/>
                        <ErrorMessage name='password'>
                            {(msg) => <p className={style.inpError}>{msg}</p>}
                        </ErrorMessage>

                        <Field className = {style.inputs} placeholder='Repeat Password' name='repPassword'/>
                        <ErrorMessage name='repPassword'>
                            {(msg) => <p className={style.inpError}>{msg}</p>}
                        </ErrorMessage>

                        <button className = {style.signBtn} type='submit' >Sign Up</button>
                    </Form>
                    )
                }
                    
            </Formik>

        </div>
    )
}