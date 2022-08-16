import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin, userAlreadyLoggedIn } from '../redux/actions'

function Login() {
    // TODO Login trar el token y lo guarda en un estado (redux?)
    // TODO El Logout deja el estado en null y deberia invalidar el token en el backend
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const userLoggedIn = useSelector(state => state.userLoggedIn)
    const userLoginData = useSelector(state => state.userLoginData)
    const loginError = useSelector(state => state.loginError)

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    //Cuando se inicia sesion por primera vez
    useEffect(() => {
        if (userLoggedIn) {
            window.localStorage.setItem(
                'CNStore', JSON.stringify(userLoginData)
            )
            navigate(from, { replace: true })
        }
    })

    // Sesion del usuario ya logueado
    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('CNStore')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            dispatch(userAlreadyLoggedIn(user))
        }
    }, [dispatch])

    const handleLogin = (event) => {
        event.preventDefault()
        dispatch(userLogin({username, password}))
        setUsername('')
        setPassword('')
        // setUser(userLoginData)
    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <div>
                username
                <input type="text" value={username} name='username' onChange={(event) => setUsername(event.target.value)} />
            </div>
            <div>
                password
                <input type="password" value={password} name='password' onChange={(event) => setPassword(event.target.value)} />
            </div>
            <div>
                <button type='submit'>login</button>
            </div>
        </form>

        <p> { loginError ?  loginError : userLoginData.token} </p>
    </div>
  )
}

export default Login