import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {  
  const location = useLocation()

  return (
    <header className="header">
        <h1>{title}</h1>
        {location.pathname === '/' && (<Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd}/>)}
    </header>
  )
}

Header.defaultProps = {
    title: 'React To-Do List',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CS in JS
// const headingStyle = {
//     color: 'blue',
//     backgroundColor: 'black',
// }

export default Header