const defaultState = {
    friends: [
        { id: 1, name: "Olga" },
        { id: 2, name: "Simon" },
        { id: 3, name: "Bred" }
    ]
};


const sideBarReducer = (state = defaultState, action) => {
    return state;
}

export default sideBarReducer;