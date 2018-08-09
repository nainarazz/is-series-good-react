const initialState = {
    show: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case "SET_SHOW":
            console.log(action.showData);
            return {
                ...state,
                show: { ...action.showData } 
            };
        default:
            return { ...state }
    }
}

export default reducer;