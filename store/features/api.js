/* 
 FILENAME:		api.js 
 PROGRAMMER(S):	Shaq Purcell 
 DATE:			17-June-2020 
 DESCRIPTION:	
 */

 import { createAction } from '@reduxjs/toolkit'

 export const apiCallStart = createAction("api/CallStart");
 export const apiCallSuccess = createAction("api/CallSuccess");
 export const apiCallFailed = createAction("api/CallFailed");