const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

const reducerProfilePage = (action, state) => {
	switch (action.type) {
		case ADD_POST:
			let post = {
				id: 3,
				avatar: "https://static10.tgstat.ru/channels/_0/50/501ea5b34460856554eafe40d15a4c83.jpg",
				name: "Thomas Shelby",
				message: state.newPostTExt,
				likeCount: 0
			};
	
			state.PostsData.unshift(post);
			state.newPostTExt = " ";
			return state;
		case UPDATE_POST_TEXT:
			state.newPostTExt = action.changingText;
			return state;
		default:
			return state;
	}
}

export const addPostActionCreator = () =>{
	return {type: ADD_POST}
}

export const updatePostActionCreator = (text) =>{
	return {type: UPDATE_POST_TEXT, changingText:text}
}


export default reducerProfilePage;