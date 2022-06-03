const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let initializationState = {
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
}

const reducerDirectPage = (state = initializationState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      {
        let message = {
          id: 5,
          message: state.newMessageText,
        };

        let stateCopy = {...state};
        stateCopy.MessagesData = [...state.MessagesData];
        stateCopy.MessagesData.push(message);
        stateCopy.newMessageText = " ";
        return stateCopy;
      }
    case UPDATE_MESSAGE_TEXT: 
      {
        let stateCopy = {...state};
        stateCopy.newMessageText = action.changingText;
        return stateCopy;
      }
    default:
      return state;
  }
};

export const addMessageActionCreator = () =>{
	return {type: ADD_MESSAGE}
}

export const updateMessageActionCreator = (text) =>{
	return {type: UPDATE_MESSAGE_TEXT, changingText:text}
}

export default reducerDirectPage;
