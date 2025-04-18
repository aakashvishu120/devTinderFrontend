import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice";
import feedSlice from "./feedSlice";
import connectionSlice from "./connectionSlice";
import requestSlice from "./requestSlice";



const appStore = configureStore({
    reducer : {
        feed : feedSlice,
        user: userSlice,
        connection: connectionSlice,
        requests: requestSlice,
    }
});

export default appStore;
//need provider at the root of the app so that entire app uses redux