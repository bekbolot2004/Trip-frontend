const initialState = {
    language: [],
};

const cars = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LANG_RU':
            return {
                ...state,
                language: "ru",
            };

        case 'SET_LANG_EN':
            return {
                ...state,
                language: "en",
            };

        default:
            return state;
    }
};

export default cars;
