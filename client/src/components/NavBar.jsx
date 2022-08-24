import { Box, Flex, Spacer } from '@chakra-ui/react'
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
    <Flex bg='red.400' p={4}>
      <Box>
        <Link to='/'>
          Cuervo Negro
        </Link>
      </Box>

      <Spacer />

      <Flex gap='6'>

        <Box>
          <Link to='/edit'>
            Editar 
          </Link>
        </Box>
      {
        userLoggedIn && <Box gap='40px'>
          <Link to='/'>
            <button onClick={handleLogout}>

              Logout
            </button>
          </Link>
        </Box> 
      }
      </Flex>
      
    </Flex>
  )
}

export default NavBar