import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './Components/User'
import CustomButton from './Shared/CustomButton'



function App() {
const[users,setuser]=useState([
  {"id":"1","name":"ali","email":"ali@gmail.com"},
{"id":"2","name":"lolo","email":"lolo@gmail.com"},
{"id":"3","name":"soso","email":"soso@gmail.com"}])
  return( 
    <>
    <CustomButton text="add user" type="create" />
<div className='users'>
  {users.map(user=>
  <User name={user.name} email={user.email}/>

  )}

      </div>
      </>
  )}
 


  
   
  


export default App
