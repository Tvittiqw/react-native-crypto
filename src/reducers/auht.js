export const START_SIGNIN = 'SIGNIN_START';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';

// export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';


const initialState = {
    isAuthorized: false,
    token:null,
    loggingIn: false,
    loginError: null,
};

export default function auth(state = initialState, action = {}) {
    switch (action.type) {
        case START_SIGNIN:
            return {
                ...state,
                loggingIn: true,
            };
        case SIGNIN_SUCCESS:
            setToken(action.result.data.token);

            return {
                ...state,
                isAuthorized: true,
                loggingIn: false,
                loginError: null,
                token: action.result.data.token
            };
        case SIGNIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                loginError: action.error && action.error.response && action.error.response.data ? action.error.response.data.message : action.error,
                errorStatus: action.error && action.error.response && action.error.response.data ? action.error: action.error,
                token: null
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                isAuthorized: false,
                token: null
            };
        default:
            return state;
    }
}

export function loginUser({ login, password }) {
    return function(dispatch) {
        clientInstance.post('/auth/login', { login, password })
            .then(response => {
                setAuthHeader(response.data.token);
                dispatch({ type: LOGIN_USER });
            })
            .catch((error) => {
                throw(error)
            });
    }
}

export function registerUser({ login, password }) {
    return function(dispatch) {
        clientInstance.post('/auth/signup', { login, password })
            .then(response => {
                console.log(response.data)
                dispatch({ type: SIGNUP_USER});
            })
            .catch((error) => {
                throw(error)
            });
    }
}

export function logOutUser() {
    return function (dispatch) {
        dispatch({ type: LOGOUT_USER });
        deleteAuthToken();
    }
}
