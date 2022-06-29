const TOOGLE_FOLLOW = "TOOGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT"

let initializationState = {
	Users: [],
  totalUsers: 0,
  perPage: 5,
  currentPage: 3
}

const reducerUsers = (state = initializationState, action) => {
	switch (action.type) {
    case TOOGLE_FOLLOW:
      return {
        ...state,
        Users: state.Users.map(user => {
          if(user.id == action.userId){
            return user.followed 
            ? {...user, followed: false } 
            : {...user, followed: true } 
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
    default:
      return state;
  }
}

export const toogleFollowActionCreator = (userId) =>{
	return {type: TOOGLE_FOLLOW, userId}
}

export const setUsersActionCreator = (users) =>{
	return {type: SET_USERS, users}
}

export const setCurrentPageActionCreator = (currentPage) =>{
	return {type: SET_CURRENT_PAGE, currentPage}
}

export const setTotalUsersCountActionCreator = (usersCount) =>{
	return {type: SET_TOTAL_USERS_COUNT, usersCount}
}


export default reducerUsers;