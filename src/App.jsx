import { useState } from 'react'
import { Form } from './components/form/form'
import './App.css'

function App({data}) {

  return (
    <>
        <Form data = {data}/>
    </>
  )
}

export default App