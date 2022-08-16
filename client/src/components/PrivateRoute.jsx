import { Navigate, useLocation, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PrivateRoute({children, ...rest}) {
  const userLoggedIn = useSelector(state => state.userLoggedIn)
  const location = useLocation()

  return (

        userLoggedIn ? (
          <Outlet /> )
          : (
            <Navigate
            to={`/login`}
            replace
            state={{ from: location }}
            />
            )
            
  )
}

export default PrivateRoute