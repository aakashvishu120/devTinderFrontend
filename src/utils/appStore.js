import {configureStore} from "@reduxjs/toolkit"
import  userSlice from "./userSlice";

const appStore = configureStore({
    reducer : {
        user: userSlice
    }
});

export default appStore;
//need provider at the root of the app so that entire app uses redux