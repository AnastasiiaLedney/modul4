import { createStore, createLogger } from 'vuex';
import message from "./message";
import auth from "./auth";
import photos from "./photos";

const store = createStore({
    plugins: [createLogger()],
    modules: {
        message,
        auth,
        photos
    },
});

export default store;