import messagePageReducer from "./messagesPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import sideBarReducer from "./sideBar-reducer";

let store = {
    _state: {
        messagesPage: {
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
            ],
            newMessageText: 'hi bro'
        },
        profilePage: {
            postsData: [
                { id: 1, post: "1 post" },
                { id: 2, post: "2 post" }
            ],
            newPostText: 'it-k'
        },
        sideBar: {
            friends: [
                { id: 1, name: "Olga" },
                { id: 2, name: "Simon" },
                { id: 3, name: "Bred" }
            ]
        }
    },
    _renderEntireTree() {
        console.log('ERR');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._renderEntireTree = observer;
    },

    dispatch(action) {
        this._state.messagesPage = messagePageReducer(this.getState().messagesPage, action);
        this._state.profilePage = profilePageReducer(this.getState().profilePage, action);
        this._state.sideBar = sideBarReducer(this.getState().sideBar, action);

        this._renderEntireTree(this._state);
    }
}

export default store;