import { getProfile, getStatus, updateStatus } from "../api/api";

const ADD_POST = 'ADD-POST';
// const NEW_POST_TEXT_CHANGE = 'NEW-POST-TEXT-CHANGE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_STATUS = 'UPDATE_STATUS';

const defaultState = {
    postsData: [
        { id: 1, post: "1 post" },
        { id: 2, post: "2 post" }
    ],
    // newPostText: 'it-k',
    profile: null,
    status: ''
};

const profilePageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            // let text = state.newPostText;
            return { ...state, postsData: [...state.postsData, { id: 5, post: action.formData.newPost }] };
            // return { ...state, postsData: [...state.postsData, { id: 5, post: text }], newPostText: '' };
        }
        // case NEW_POST_TEXT_CHANGE: {
        //     return { ...state, newPostText: action.newPost };
        // }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }
        case UPDATE_STATUS: {
            return { ...state, status: action.status }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (formData) => ({ type: ADD_POST, formData: formData });
// export const onPostChangeActionCreator = (text) => ({ type: NEW_POST_TEXT_CHANGE, newPost: text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile });
export const getAuthStatus = (status) => ({ type: SET_STATUS, status: status });
export const updateAuthStatus = (status) => ({ type: UPDATE_STATUS, status: status });

export const setProfileThunkCreator = (userId) => {
    return (dispatch) => {
        getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        getStatus(userId)
            .then(data => {
                dispatch(getAuthStatus(data));
            })
    }
}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        updateStatus(status)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(updateAuthStatus(status));
                }
            })
    }
}

export default profilePageReducer;