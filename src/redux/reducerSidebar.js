let initializationState = {
	Friends: [
		{id: 1, name: "Julia", avatar: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
		{id: 2, name: "Anton", avatar: "https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
		{id: 3, name: "Kamila", avatar: "https://images.pexels.com/photos/1054251/pexels-photo-1054251.jpeg"}
	]
}

const reducerSidebar = (state = initializationState, action) => {
	return state;
}


export default reducerSidebar;