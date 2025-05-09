import style from './login.module.css'
import { Formik , Form , Field } from 'formik'
import { Register } from '../register/register'
import { User } from '../user/user'

export function Login ({data}) {
    return (
        <div className={style.login}>
            <Formik
            initialValues={{
                userName : '',
                email : '',
                password : ''
            }}
            
            onSubmit={(val) => {
                data.map((user) => {
                    if(val.userName === user.userName && val.email === user.email && val.password === user.password){
                        <User userName = {val.userName} email = {val.email}/>
                    }else {
                        <Register data = {data} regStyle = 'active'/>
                    }
                })
            }}
            >
                {() => (
                    <div className={style.login}>
                        <Form>
                            <Field name = 'userName' placeholder = 'User Name'/>
                            <Field name = 'email' placeholder = 'Email'/>
                            <Field name = 'password' placeholder = 'Password'/>
                            <button type='submit'>Log In</button>
                        </Form>
                    </div>
                )}

            </Formik>
        </div>
    )
}