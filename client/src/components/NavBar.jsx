import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../redux/actions'

// TODO Agregar boton a home, create y logout. El logout se muestra con un condicional si es que hay token


function NavBar() {
  const userLoggedIn = useSelector(state => state.userLoggedIn)
  const dispatch = useDispatch()
  
  const handleLogout = () => {
    window.localStorage.removeItem('CNStore')
    dispatch(logout())
  }

  return (
    <Box bg='red.400' p={4}>
      <Link to='/'>
        Cuervo Negro
      </Link>
      <Link to='/edit'>
        Editar 
      </Link>

      {
        userLoggedIn && <Link to='/'>
          <button onClick={handleLogout}>

            Logout
          </button>
          </Link>
      }
      
    </Box>
  )
}

export default NavBar