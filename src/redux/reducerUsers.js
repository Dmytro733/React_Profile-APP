const TOOGLE_FOLLOW = "TOOGLE-FOLLOW";

let initializationState = {
	Users: [
    {
      id: 1, 
      name: "Janet", 
      avatar: "https://images.unsplash.com/photo-1470441623172-c47235e287ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      location: {
        country: "Ukraine",
        city: "Ivano-Frankovsk",
      },
      status: "I`m boss",
      followed: true
    },
    {
      id: 2, 
      name: "Dima", 
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      location: {
        country: "English",
        city: "London",
      },
      status: "I`m boss too",
      followed: true
    },
    {
      id: 3, 
      name: "Anna", 
      avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80",
      location: {
        country: "USA",
        city: "California",
      },
      status: "I`m boss too",
      followed: false
    },
    {
      id: 4, 
      name: "Volodimir", 
      avatar: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      location: {
        country: "Ukraine",
        city: "Ivano-Frankovsk",
      },
      status: "I`m boss too",
      followed: false
    }
	]
}

const reducerUsers = (state = initializationState, action) => {
	switch (action.type) {
    case TOOGLE_FOLLOW:
      return {
        ...state,
        Users: state.Users.map(user => {
          if(user.id == action.userId){

            console.log(action.userId)
            return user.followed 
            ? {...user, followed: false } 
            : {...user, followed: true } 
          }

          return user;
        })
      }
    default:
      return state;
  }
}

export const toogleFollowActionCreator = (userId) =>{
	return {type: TOOGLE_FOLLOW, userId}
}


export default reducerUsers;