import {
    CREATE_ZONE,
    RETRIEVE_ZONES,
    UPDATE_ZONE,
    DELETE_ZONE,
    DELETE_ALL_ZONES,
} from './types';

import zoneService from '../services/zoneService';

export const createZone = (payload) => async (dispatch) => {
    try {
        const res = await zoneService.create(payload);

        dispatch({
            type: CREATE_ZONE,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveZones = () => async (dispatch) => {
    try {
        // await zoneService.getAll().then(d => {
        //     dispatch({
        //         type: RETRIEVE_ZONES,
        //         payload: d.data
        //     });
        // });


        const res = await zoneService.getAll();
        console.log(res)
        dispatch({
            type: RETRIEVE_ZONES,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateZone = (id, data) => async (dispatch) => {
    try {
        const res = await zoneService.update(id, data);

        dispatch({
            type: UPDATE_ZONE,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteZone = (id) => async (dispatch) => {
    try {
        const res = await zoneService.remove(id);

        dispatch({
            type: DELETE_ZONE,
            payload: res.data

        });
        return Promise.resolve(res.data);

    } catch (err) {
        console.log(err);
    }
};

export const deleteAllZones = () => async (dispatch) => {
    try {
        const res = await zoneService.removeAll();

        dispatch({
            type: DELETE_ALL_ZONES,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const findZonesByTitle = (title) => async (dispatch) => {
    try {
        const res = await zoneService.findByTitle(title);

        dispatch({
            type: RETRIEVE_ZONES,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
