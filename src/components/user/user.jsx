import style from './user.module.css'
import { Form } from '../form/form'

export function User ({userName, userEmail}) {
    return (
        <div className={style.userBio}>
            <h2>Welcome , {userName} !</h2>
            <p>Name : {userName} </p>
            <p>Mail : {userEmail}</p>
        </div>
    )
}