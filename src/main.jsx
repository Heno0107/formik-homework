import { createRoot } from 'react-dom/client'
import './index.css'
import { Data } from './database.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(

    <App data = {Data}/>

)