import PropTypes from 'prop-types'
import Header from './Header'

const Button = ({color,text,onClick}) => {
    

    return (
        <button
        onClick={onClick}
        style= {{backgroundColor:color}} 
        className='btn'> 
                     
                    
      {text}</button>
    )

}

// Header.defaultProps={
//     title:'Task Tracker',
// }

export default Button
