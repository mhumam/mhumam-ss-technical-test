/**
 * @author Muhamad Humam
 * @email muhamadhumamm17@gmail.com
 * @create date 2020-09-02 21:33:33
 * @modify date 2020-09-02 21:33:33
 * @desc Action Redux
 */

import {
    SELECT_USER,
    REQUEST_USERDATA,
    RECEIVE_USERDATA,
    RECEIVE_USERDATA_ERROR,
    REQUEST_REPOS,
    RECEIVE_REPOS,
    RECEIVE_REPOS_ERROR,
} from './ActionsTypes';

import axios from 'axios';


export function selectUser(user) {
    return {
        type: SELECT_USER,
        user,
    };
}

export function requestUserData() {
    return {
        type: REQUEST_USERDATA,
    };
}

function receiveUserData(json) {
    return {
        type: RECEIVE_USERDATA,
        userData: json,
    };
}

function receiveUserDataErr(error) {
    return {
        type: RECEIVE_USERDATA_ERROR,
        error,
    };
}

function requestRepos() {
    return {
        type: REQUEST_REPOS,
    };
}

function receiveRepos(json) {
    return {
        type: RECEIVE_REPOS,
        repos: json,
    };
}

function receiveReposErr(error) {
    return {
        type: RECEIVE_REPOS_ERROR,
        error,
    };
}

export function fetchUserData(user) {
    // return dispatch => {
    //     dispatch(requestUserData());
    //     return fetch(`https://api.github.com/users/${user}`)
    //         .then(res => res.json())
    //         .then(json => dispatch(receiveUserData(json)))
    //         .catch(err => dispatch(receiveUserDataErr(err)));
    // };

    return dispatch => {
        dispatch(requestUserData());
        return axios.get(`https://api.github.com/users/${user}`)
            .then(function (response) {
                // handle success
                dispatch(receiveUserData(response.data))
            })
            .catch(function (error) {
                // handle error
                dispatch(receiveUserDataErr(error));
            })
    };

}

function fetchRepos(user) {
    return dispatch => {
        dispatch(requestRepos());
        return axios.get(`https://api.github.com/users/${user}/repos`)
            .then(function (response) {
                // handle success
                dispatch(receiveRepos(response.data))
            })
            .catch(function (error) {
                // handle error
                dispatch(receiveReposErr(error));
            })
    };
}

export function fetchUserAndRepos(user) {
    return (dispatch, getState) => {
        return dispatch(fetchUserData(user)).then(() => {
            const { currentUserData } = getState();
            if (
                !currentUserData.isFetching &&
                currentUserData.userData.message
            ) {
                return;
            }
            return dispatch(fetchRepos(user));
        });
    };
}
