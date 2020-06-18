/* 
 FILENAME:		auth.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			17-June-2020 
 DESCRIPTION:	Handles all information of user authorization. Logging In/ Logging Out. User Information / Tokens
 */

 import * as actions from './api'
 import { createAction, createReducer } from '@reduxjs/toolkit'


export default createReducer([], {
    // key: value = actions: functions (event => eventhandler)
    userAuthenticated: (state, action) => {
        state.push({
            user: action.payload
        })
    }
})


 //Action Creation
export const userAuthenticated = createAction("userAuthenticated");

export const logUserIn = (email, password) => actions.apiCallStart ({
    route: "user/login",
    method: "POST",
    data: {
        email,
        password
    },
    onSuccess: 'userAuthenticated'
 })