let initializationState = {
	Users: [
    {
      id: 1, 
      name: "Janet", 
      avatar: "https://images.unsplash.com/photo-1470441623172-c47235e287ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      country: "Ukraine",
      city: "Ivano-Frankovsk",
      message: "Hi😊"
    },
    {
      id: 2, 
      name: "Dima", 
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      country: "English",
      city: "London",
      message: "How are you?"
    },
    {
      id: 3, 
      name: "Anna", 
      avatar: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1195&q=80",
      country: "USA",
      city: "California",
      message: "Yes😂"
    },
    {
      id: 4, 
      name: "Volodimir", 
      avatar: "https://images.unsplash.com/photo-1565464027194-7957a2295fb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      country: "Ukraine",
      city: "Ivano-Frankovsk",
      message: "Do you go?"
    }
	]
}

const reducerUsers = (state = initializationState, action) => {
	return state;
}


export default reducerUsers;