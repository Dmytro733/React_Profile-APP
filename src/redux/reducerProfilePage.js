const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let initializationState = {
	PostsData: [
		{id: 1, avatar: "https://historyurok.com.ua/wp-content/uploads/2020/01/Aktor.jpg", name: "Will Smith", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", likeCount: 10 },
		{id: 2, avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg", name: "Leonardo Dicaprio", message: "Lorem adipisicing elit.", likeCount: 7 }
	],

	newPostText: ""
}

const reducerProfilePage = (state = initializationState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
        ...state,
				PostsData: [{
					id: state.PostsData.length + 1,
					avatar: "https://static10.tgstat.ru/channels/_0/50/501ea5b34460856554eafe40d15a4c83.jpg",
					name: "Thomas Shelby",
					message: state.newPostText,
					likeCount: 0
				}, ...state.PostsData],
        newPostText: ""
      }
		case UPDATE_POST_TEXT:
			return {
        ...state,
        newPostText: action.changingText
      }
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