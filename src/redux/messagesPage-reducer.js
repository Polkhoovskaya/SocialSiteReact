const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT_CHANGE = 'NEW-MESSAGE-TEXT-CHANGE';

const defaultState = {
    dialogsData: [
        { id: 1, name: "Olga" },
        { id: 2, name: "Simon" },
        { id: 3, name: "Bred" },
        { id: 4, name: "Tanya" },
        { id: 5, name: "Lena" }
    ],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your day?" },
        { id: 3, message: "Great!" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" }
    ]
};

const messagePageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {

            return { ...state, messagesData: [...state.messagesData, { id: 8, message: action.formData.message }], newMessageText: '' };
        }
        default:
            return state;
    }
}

export const addMessageActionCreator = (formData) => ({ type: ADD_MESSAGE, formData: formData });

export default messagePageReducer;