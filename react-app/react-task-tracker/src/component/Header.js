import React from 'react'
import Button from './Button'
import './Header.css'

const Header = ({title}) => {
    const onClick =() =>{
        console.log('Click')
    }
  return (
    <header className='Header'>
        <h1>{title}</h1>
        <Button color='green' text='Add' onClick=
        {onClick} />

    </header>
  )
}

Header.defaultProps={
    title:'Task Tracker',
}

//css in js
// const headingStyle ={
//     color:'red',
//     backgroundColor:'black'
// }
export default Header



