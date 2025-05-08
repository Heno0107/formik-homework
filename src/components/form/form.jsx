import style from './form.module.css'
import { User } from '../user/user'
import {Formik} from 'formik'
import { Register } from '../register/register'
import { SchemaInp } from '../../schema/schema'

export function Form ({data}) {

    return(
        <div className={style.form}>
            <div className={style.header}>
                <h1>Create a new account</h1>
                <h3>it's quick and easy</h3>
            </div>

            <Register data = {data}/>
            
        </div>
    )
}