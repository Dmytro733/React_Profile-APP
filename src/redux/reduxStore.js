import { combineReducers, createStore } from "redux"
import reducerDirectPage from "./reducerDirectPage";
import reducerProfilePage from "./reducerProfilePage";
import reducerSidebar from "./reducerSidebar";

let reducers = combineReducers({
    ProfilePage: reducerProfilePage, 
    DirectPage: reducerDirectPage,
    Sidebar: reducerSidebar
})

let store = createStore(reducers);

export default store;