// // import { GET_USERS } from './../common/types'

// const initialState = {
//     usersList: [],
//     user: {},
//     loading: true,
//     error: false,
// };

// function users2Reducer(state = initialState, action) {

//     switch (action.type) {
//         case 'LOAD_USERS':
//             return { ...state, usersList: [], error: false, loading: true }
//         case 'GET_USERS':
//             return { ...state, usersList: action.payload, error: false, loading: false }
//         case 'ERROR_USERS':
//             return { ...state, usersList: [], error: true, loading: false }
//         case 'ADD_USERS':
//             console.log('ADD_USERS')
//             return { ...state, user: action.payload, error: false, loading: false }
//         case 'INSERTED_USERS':
//             console.log('INSERTED_USERS')
//             return { ...state, user: action.payload, error: false, loading: false }
//         default:
//             return state;
//     }
// }
// export default users2Reducer;

import {
    CREATE_ZONE,
    RETRIEVE_ZONES,
    UPDATE_ZONE,
    DELETE_ZONE,
    DELETE_ALL_ZONES,
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
        // return payload;

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
                alert(payload.success)
                if (payload.success) {

                    return { ...result, data: result.data.filter(({ id }) => id !== payload.data), loading: false }
                }

                return { ...result, data: result.data, statusCode: payload.statusCode, loading: false,message:payload.message, success: payload.success }
            }
        case DELETE_ALL_ZONES:
            return [];

        default:
            return result;
    }
};

export default zoneReducer;