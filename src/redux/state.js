
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";

let renderDOM ;

let store = {
	_state: {
		ProfilePage: {
			PostsData: [
				{id: 1, avatar: "https://historyurok.com.ua/wp-content/uploads/2020/01/Aktor.jpg", name: "Will Smith", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", likeCount: 10 },
				{id: 2, avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg", name: "Leonardo Dicaprio", message: "Lorem adipisicing elit.", likeCount: 7 }
			],
	
			newPostTExt: ""
		},
	
		DirectPage: {
			DialogsData: [
				{id: 1, name: "Janet", avatar: "https://images.unsplash.com/photo-1470441623172-c47235e287ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"},
				{id: 2, name: "Dima", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"},
				{id: 3, name: "Anna", avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80"},
				{id: 4, name: "Volodimir", avatar: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"},
				{id: 5, name: "Oksana", avatar: "https://images.unsplash.com/photo-1606062663931-277af9e93298?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
				{id: 6, name: "Anastasiya", avatar: "https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}
			],
		
			MessagesData: [
				{id: 1, message: "Hi😊"},
				{id: 2, message: "How are you?"},
				{id: 3, message: "Do you go?"},
				{id: 4, message: "Yes😂"},
			],
	
			newMessageText: ""
		},
	
		Sidebar: {
			Friends: [
				{id: 1, name: "Julia", avatar: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
				{id: 2, name: "Anton", avatar: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
				{id: 3, name: "Kamila", avatar: "https://images.pexels.com/photos/1054251/pexels-photo-1054251.jpeg"}
			]
		}
	},

	dispatch(action){
		if(action.type === ADD_MESSAGE){
			let message = {
				id: 5,
				message: this._state.DirectPage.newMessageText
			};
		
			this._state.DirectPage.MessagesData.push(message);
			this._state.DirectPage.newMessageText = " ";
			renderDOM();
		}else if(action.type === UPDATE_MESSAGE_TEXT){
			this._state.DirectPage.newMessageText = action.changingText;
			renderDOM();
		}else if(action.type === ADD_POST){
			let post = {
				id: 3,
				avatar: "https://static10.tgstat.ru/channels/_0/50/501ea5b34460856554eafe40d15a4c83.jpg",
				name: "Thomas Shelby",
				message: this._state.ProfilePage.newPostTExt,
				likeCount: 0
			};
		
			this._state.ProfilePage.PostsData.unshift(post);
			this._state.ProfilePage.newPostTExt = " ";
			renderDOM();
		}else if(action.type === UPDATE_POST_TEXT){
			this._state.ProfilePage.newPostTExt = action.changingText;
			renderDOM();
		}
	},

	getState(){
		return this._state;
	},

	rerender(observer){
		renderDOM = observer;
	}

}

export const addMessageActionCreator = () =>{
	return {type: ADD_MESSAGE}
}

export const updateMessageActionCreator = (text) =>{
	return {type: UPDATE_MESSAGE_TEXT, changingText:text}
}

export const addPostActionCreator = () =>{
	return {type: ADD_POST}
}

export const updatePostActionCreator = (text) =>{
	return {type: UPDATE_POST_TEXT, changingText:text}
}

export default store;