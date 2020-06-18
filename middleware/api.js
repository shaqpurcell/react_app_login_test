/* 
 FILENAME:		api.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			17-June-2020 
 DESCRIPTION:	
 */

import { API_ENDPOINT } from "../config";
import * as actions from "../store/features/api"
import axios from 'axios'
 
const api = ({dispatch}) => next => async action => {
    console.log(action.type);
    //Check action types, send to next middleware
    if (action.type !== "api/CallStart") return next(action);
    //The information required to send a Axios API request + functions to execute on fail/success conditions
    const { route, method, data, onSuccess, onError } = action.payload
    console.log(data);

    try {
        const response = await fetch(API_ENDPOINT + route, {
            method: method,
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(data)
        });
        let json = await response.json();
        console.log(json);
        //On Success - general
        dispatch(actions.apiCallSuccess(json));
        //On Success - Send recieved data as payload to next function
        if (onSuccess) dispatch ({type: onSuccess, payload: json});
        
    } catch (error) {
        console.log(error);
        //On Failure - General
        dispatch(actions.apiCallFailed(error));
        //On Failure - Specific
        if (onError) dispatch ({type: onError, payload: error});
        
    }
}

export default api;