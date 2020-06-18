/* 
 FILENAME:		configureStore.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			17-June-2020 
 DESCRIPTION:	
 */

import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import reducer from "./rootReducer"
import api from '../middleware/api'

export default function () {
    return configureStore({
        reducer,
    middleware: [...getDefaultMiddleware(), api]});
}