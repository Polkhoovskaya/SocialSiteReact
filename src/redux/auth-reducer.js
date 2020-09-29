import { stopSubmit } from "redux-form";
import { getAuth, login, logout } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const SET_INITIALISED = 'SET_INITIALISED';
// const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let defaultState = {
    initializwd: false,
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data }

        // case TOGGLE_IS_LOADING:
        //     return { ...state, isLoading: action.isLoading }
        case SET_INITIALISED:
            return { ...state, initialized: true }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const initializedSuccess = () => ({ type: SET_INITIALISED });
//export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading });


// export const setAuthUserDataThunkCreator = () => {
//     return (dispatch) => {
//         getAuth().then(data => {
//             if (data.resultCode === 0) {
//                 let { id, login, email } = data.data;
//                 dispatch(setAuthUserData(id, login, email, true));
//             }
//         })
//     }
// }

export const inintializeAppThunkCreator = () => {
    return (dispatch) => {
        getAuth().then(data => {
            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                dispatch(setAuthUserData(id, login, email, true));
            }
        }).then(() => {
            dispatch(initializedSuccess());
        });
    }
}

export const loginThunkCreator = (email, password, rememberMe) => {
    return (dispatch) => {

        login(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(inintializeAppThunkCreator());
            } else {
                //ощибка для всей формы
                data.messages.length > 0 ? dispatch(stopSubmit("login", { _error: data.messages[0] })) : dispatch(stopSubmit("login", { _error: "Some error" }));
            }
        })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;