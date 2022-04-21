
import {renderDOM} from '../render';

let state = {
	ProfilePage: {
		PostsData: [
			{id: 1, avatar: "https://historyurok.com.ua/wp-content/uploads/2020/01/Aktor.jpg", name: "Will Smith", message: "Lorem ipsum dolor sit amet consectetur adipisicing elit.", likeCount: 10 },
			{id: 2, avatar: "https://www.themoviedb.org/t/p/w235_and_h235_face/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg", name: "Leonardo Dicaprio", message: "Lorem adipisicing elit.", likeCount: 7 }
		]
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
}

export let addDialogMessage = () => {
	let post = {
		id: 5,
		message: state.DirectPage.newMessageText
	};

	state.DirectPage.MessagesData.push(post);
	state.DirectPage.newMessageText = " ";
	renderDOM(state)

	console.log(state.DirectPage.newMessageText)
}

export let updateMessageText = (changingText) => {
	state.DirectPage.newMessageText = changingText;
	renderDOM(state)
}

export default state;