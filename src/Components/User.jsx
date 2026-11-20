import React from 'react'
import CustomButton from '../Shared/CustomButton'

export default function User(props) {
  return (
    <div className='user' >
        <h2>Name is{props.name}</h2>
        <h3>Email is {props.email}</h3>
        <CustomButton text="Detalis"  type='info'/>

        <CustomButton text="Delete" type='delete' />
    </div>
  )
}
