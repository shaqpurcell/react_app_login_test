/* 
 FILENAME:		rootReducer.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			17-June-2020 
 DESCRIPTION:	
 */

import {combineReducers} from "redux";
import authReducer from "./features/auth";

export default combineReducers ({
    auth: authReducer,

});
