/* 
 FILENAME:		auth.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			17-June-2020 
 DESCRIPTION:	Handles all information of user authorization. Logging In/ Logging Out. User Information / Tokens
 */

 import * as actions from './api'
 import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
    name: 'auth',
    initialState: {userSession: undefined},
    extraReducers: {
        setUserSession: (state, action) => {
            if (action.payload.json.id !== undefined) {
                console.log(action);
                state.userSession = true;
                // state.push({ userSession: true });
            } else {
                state.userSession = undefined;
            }
        }
    }
})

export const getUserSession = () => actions.apiCallStart({
    route: "v1/user/active",
    method: "GET",
    data: undefined,
    onSuccess: 'setUserSession'
})

export const logUserOut = () => actions.apiCallStart({
    route: "v1/user/logout",
    method: "GET",
    data: undefined,
    onSuccess: 'setUserSession'
})

export const logUserIn = (email, password) => actions.apiCallStart ({
    route: "v1/user/login",
    method: "POST",
    data: {
        email: email,
        password: password
    },
 })

 export const {setUserSession} = slice.actions;
 export default slice.reducer;