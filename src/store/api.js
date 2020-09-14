import { createAction } from "@reduxjs/toolkit";

export const apiRequest = createAction("api/apiRequest");
export const apiCallSuccess = createAction("api/apiCallSuccess");
export const apiCallFailed = createAction("api/apiCallFailed");
