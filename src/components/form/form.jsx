import style from './form.module.css'
import { User } from '../user/user'
import {Formik} from 'formik'
import { Register } from '../register/register'
import { SchemaInp } from '../../schema/schema'
import { Login } from '../login/login'

export function Form ({data , regStyle}) {

    return(
        <Login data = {data}/>
    )
}