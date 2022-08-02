const ADD_COMMENT = "ADD-COMMENT";
const UPDATE_COMMENT_TEXT = "UPDATE-COMMENT-TEXT";
const SET_PROFILE = "SET-PROFILE";
const TOOGLE_IS_FETCHING = "TOOGLE-IS-FETCHING"
const SET_USER_ID = "SET-USER-ID"

let initializationState = {
	profile: null,
	newCommentText: "",
	defaultUserId: 1,
  isFatching: true
}

const reducerProfilePage = (state = initializationState, action) => {
	switch (action.type) {
		case SET_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
		case TOOGLE_IS_FETCHING:
			return{
				...state,
				isFatching: action.isFatching
			}
		case SET_USER_ID:
      return {
        ...state,
        defaultUserId: action.userId
      }
		case ADD_COMMENT:
			return {
        ...state,
				CommentsData: [{
					id: state.CommentsData.length + 1,
					avatar: "https://static10.tgstat.ru/channels/_0/50/501ea5b34460856554eafe40d15a4c83.jpg",
					name: "Thomas Shelby",
					message: state.newCommentText,
					likeCount: 0
				}, ...state.CommentsData],
        newCommentText: ""
      }
		case UPDATE_COMMENT_TEXT:
			return {
        ...state,
        newCommentText: action.changingText
      }
		default:
			return state;
	}
}

export const setProfile = (profile) =>{
	return {type: SET_PROFILE, profile}
}

export const toogleIsFetching = (isFatching) =>{
	return {type: TOOGLE_IS_FETCHING, isFatching}
}

export const addComment = () =>{
	return {type: ADD_COMMENT}
}

export const updateComment = (text) =>{
	return {type: UPDATE_COMMENT_TEXT, changingText:text}
}

export const setUserId = (userId) =>{
	return {type: SET_USER_ID, userId}
}

export default reducerProfilePage;