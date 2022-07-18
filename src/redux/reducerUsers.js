const TOOGLE_FOLLOW = "TOOGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const TOOGLE_IS_FETCHING = "TOOGLE-IS-FETCHING";
const ON_SELECT_COUNT_ITEMS = "ON-SELECT-COUNT-ITEMS"

let initializationState = {
	Users: [],
  totalUsers: 0,
  perPage: null,
  currentPage: null,
  isFatching: true
}

const reducerUsers = (state = initializationState, action) => {
	switch (action.type) {
    case TOOGLE_FOLLOW:
      return {
        ...state,
        Users: state.Users.map(user => {
          if(user.id === action.userId){
            return  {...user, followed: !user.followed }
          }

          return user;
        })
      }

    case SET_USERS:
      return {
        ...state,
        Users: [...action.users]
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      }
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsers: action.usersCount
      }
    case TOOGLE_IS_FETCHING:
      return{
        ...state,
        isFatching: action.isFatching
      }
    case ON_SELECT_COUNT_ITEMS:
      return{
        ...state,
        perPage: action.countItems
      }
    default:
      return state;
  }
}

export const toogleFollow = (userId) =>{
	return {type: TOOGLE_FOLLOW, userId}
}

export const setUsers = (users) =>{
	return {type: SET_USERS, users}
}

export const setCurrentPage = (currentPage) =>{
	return {type: SET_CURRENT_PAGE, currentPage}
}

export const setTotalUsersCount = (usersCount) =>{
	return {type: SET_TOTAL_USERS_COUNT, usersCount}
}

export const toogleIsFetching = (isFatching) =>{
	return {type: TOOGLE_IS_FETCHING, isFatching}
}

export const onSelectCountItems = (countItems) =>{
	return {type: ON_SELECT_COUNT_ITEMS, countItems}
}


export default reducerUsers;