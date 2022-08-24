const initialState = {
    products: [],
    categories: [],
    userLoggedIn: false,
    userLoginData: [],
    loginError: ''
}

// TODO cuando se hace el delete no renderiza el home automaticamente

export default function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            if (action.payload.error === 'invalid username or password') {
                return {
                    ...state,
                    loginError: action.payload.error
                }
            }
            else return {
                ...state,
                userLoginData: action.payload,
                userLoggedIn: true
            }
        case 'GET_PRODUCTS':
            return{
                ...state,
                products: action.payload
            }
        case 'POST_PRODUCT':
            return{
                ...state
                }
        case 'ALREADY_LOGGED_IN':
            return{
                ...state,
                userLoginData: action.payload,
                userLoggedIn: true
            }
        case 'LOGOUT':
            return{
                ...state,
                userLoginData: [],
                userLoggedIn: false
            }
        case 'DELETE':
            return{
                ...state,
                products: state.products.filter(product => product.id === action.payload)
            }
        case 'GET_CATEGORIES':
            return{
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}