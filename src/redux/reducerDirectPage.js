const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

const reducerDirectPage = (action, state) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {
        id: 5,
        message: state.newMessageText,
      };

      state.MessagesData.push(message);
      state.newMessageText = " ";
      return state;
    case UPDATE_MESSAGE_TEXT:
      state.newMessageText = action.changingText;
      return state;
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
