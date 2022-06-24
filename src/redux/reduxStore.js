import { combineReducers, createStore } from "redux"
import reducerDirectPage from "./reducerDirectPage";
import reducerProfilePage from "./reducerProfilePage";
import reducerSidebar from "./reducerSidebar";
import reducerUsers from "./reducerUsers";

let reducers = combineReducers({
    ProfilePage: reducerProfilePage, 
    DirectPage: reducerDirectPage,
    Sidebar: reducerSidebar,
    UsersPage: reducerUsers
})


let store = createStore(reducers);

window.store = store

export default store;