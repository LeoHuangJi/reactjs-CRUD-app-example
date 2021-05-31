import {
    CREATE_ZONE,
    RETRIEVE_ZONES,
    UPDATE_ZONE,
    DELETE_ZONE,
    DELETE_ALL_ZONES,
    GET_ZONE
} from '../actions/types';

//const initialState = [];
const initialState = {
    data: [],
    loading: true,
    success: true,
    statusCode: '',
    message: ''
};


const zoneReducer = (result = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_ZONE:
            return [...result, payload];

        case RETRIEVE_ZONES:
            return { ...result, data: payload.data, loading: false }
        case GET_ZONE:
            return { ...result, data: payload.data, loading: false }

        case UPDATE_ZONE:
            return result.map((tutorial) => {
                if (tutorial.id === payload.id) {
                    return {
                        ...tutorial,
                        ...payload,
                    };
                } else {
                    return tutorial;
                }
            });

        case DELETE_ZONE:

            {
                if (payload.success) {
                    return { ...result, data: result.data.filter(({ id }) => id !== payload.data), loading: false }
                }
                console.log('payload')
                console.log(payload)
                return { ...result, data: result.data, statusCode: payload.statusCode, loading: false, message: payload.message, success: payload.success }
            }
        case DELETE_ALL_ZONES:
            return [];

        default:
            return result;
    }
};

export default zoneReducer;