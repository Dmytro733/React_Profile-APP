const TOOGLE_FOLLOW = "TOOGLE-FOLLOW";
const SET_USERS = "SET-USERS";

let initializationState = {
	Users: []
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


export default reducerUsers;