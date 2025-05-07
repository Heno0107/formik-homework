import style from './form.module.css'
import { User } from '../user/user'
import { Error } from '../error/error'
import { useState } from 'react'
import {Formik} from 'formik'

export function Form () {
    const [showUser , setShowUser] = useState(true)

    return(
        <div className={style.form}>
            <div className={style.header}>
                <h1>Create a new account</h1>
                <h3>it's quick and easy</h3>
            </div>

            <div className={style.inputs}>
                <Formik
                initialValues={{
                    name : '',
                    lastName : '',
                    email : '',
                    password : '',
                    repPassword : '',
                }}
                onSubmit={(values) => console.log(values)}
                >
                {
                    ({values , handleChange , handleSubmit}) => {
                    <form onSubmit={handleSubmit}>
                        <input type="text" className={showUser == 'decline' ? style.UserError : style.user} placeholder='Name' value = {values.name} onChange={handleChange} name='name'/>
                        <input type="text" className={showUser == 'decline' ? style.UserError : style.user} placeholder='Last Name' value = {values.lastName} onChange={handleChange} name='lastName'/>
                        <input type="email" className={showUser == 'decline' ? style.PassError : style.pass} placeholder='Email' value = {values.email} onChange={handleChange} name='email'/>
                        <input type="password" className={showUser == 'decline' ? style.PassError : style.pass} placeholder='Password' value = {values.password} onChange={handleChange} name='password'/>
                        <input type="password" className={showUser == 'decline' ? style.PassError : style.pass} placeholder='Repeat Password' value={values.repPassword} onChange={handleChange} name='repPassword'/>
     
                        <button className = {style.signBtn} type='submit' onClick={() => {(values.name && values.lastName && values.email && values.password && values.password == values.repPassword) ? setShowUser('accept') : setShowUser('decline')}}>Sign Up</button>
                        {showUser == 'decline' && <Error />}
                        {showUser == 'accept' && <User userName={values.name} userLname={values.lastName} userEmail={values.email} userPass={values.password}/>}
    
                    </form>
                    }
                }
                </Formik>
            </div>
            
        </div>
    )
}

