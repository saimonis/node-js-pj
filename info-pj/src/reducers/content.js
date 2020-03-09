const initialState = {
    data: []
}


const content = (state = initialState,action) => {
    switch (action.type) {
        case "FETCH_DATA_SUCCESS":
            return {
            ...state,
                data: [...action.payload]
        };
        default: return initialState
    }
}

export default content