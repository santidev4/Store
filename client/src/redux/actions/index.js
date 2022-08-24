import axios from 'axios'

export function userLogin(credentials) {
    return async function( dispatch) {
        try {
            const response = await axios.post('/login', credentials)
            return dispatch({
                type: 'LOGIN',
                payload: response.data
            })

        } catch (error) {
            console.log(error)
            return dispatch({
                type: 'LOGIN',
                payload: error.response.data
            })
        }
    }
}

export function getProducts() {
    return async function(dispatch) {
        try {
            const response = await axios.get('/products')
            return dispatch({
                type: 'GET_PRODUCTS',
                payload: response.data
            })
        } catch (error) {
            
        }
    }
}

export function postProduct(product, config) {
    return async function(dispatch){
        try {
            const response = await axios.post('/products', product, config)
            return dispatch({
                type: 'POST_PRODUCT',
                payload: response.data
            })
        } catch (error) {
            console.error(error)
        }
    }
}

export function userAlreadyLoggedIn(user) {
    return async function(dispatch) {
        return dispatch({
            type: 'ALREADY_LOGGED_IN',
            payload: user
        })
    }
}

export function logout() {
    return async function(dispatch) {
        return dispatch({
            type: 'LOGOUT',
        })
    }
}

export function deleteProduct(id) {
    return async function(dispatch) {
        await axios.delete('/products/' + id)
        return dispatch({
            type: 'DELETE',
            payload: id
        })
    }
}

export function getCategories() {
    return async function(dispatch) {
        const response = await axios.get('/categories')
        return dispatch({
            type: 'GET_CATEGORIES',
            payload: response.data
        })
    }
}