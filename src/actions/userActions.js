import $ from 'jquery';

export const UPDATE_USER = 'UPDATE_USER';
export const SHOW_ERROR = 'SHOW_ERROR';
export const API_REQUEST_REQUEST = 'API_REQUEST_REQUEST';

export function updateUser(newUser) {
    return {
        type: UPDATE_USER,
        payload: {
            user: newUser
        }
    }
}

export function showError() {
    return {
        type: 'SHOW_ERROR',
        payload: {
            user: 'ERROR'
        }
    }
}

export function onRequest() {
    return {
        type: API_REQUEST_REQUEST
    }
}

export function apiRequest() {
    return dispatch => {
        dispatch(requestMade());
        $.ajax({
            url: 'http://google.com',
            success(response) {
                console.log('SUCCESS');
                dispatch(updateUser(response.newUser));
            },
            error() {
                console.log('ERROR');
                dispatch(showError());
            }
        });
    }
}