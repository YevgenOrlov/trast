const ADD_POST= 'ADD-POST';
const UPDATE_NEW_POST_TEXT  = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';




let store = {
   _state: {  dialogsPage : {        
   dialogs : [
                 {id:1, name: "Dimych1"},
                 {id:2, name: "Dimych2"},
                 {id:3, name: "Dimych3"},
                 {id:4, name: "Dimych4"},
                 {id:5, name: "Dimych5"},
                 {id:6, name: "Dimych6"}
                ],
   messages : [
                {id:1, message: "hi"},
                {id:2, message: "How is you"},
                {id:3, message: "ebdd"},
                {id:4, message: "ebdd"},
                {id:5, message: "ebdd"},
                {id:6, message: "ebdd"}
            ] ,
                 newMessagesBody: ""     
              },
             
             
  profilePage : {
   posts: [
            {id:1, message: "Hi, how are you?", likesCount: 12},
            {id:2, message: "Its my first , how bare you?", likesCount: 14},
            {id:3, message: "Hi, how are you?", likesCount: 12},
            {id:4, message: "Its my first , how bare you?", likesCount: 14}
                ],
                newPostText: 'tttttttttttttt'
              }
             },
   _callSubsriber () {
               console.log(  'state ch');
            },
   subscriber (observer) { this._callSubsriber = observer; },
    getState() {
               return this._state
             },

    dispatch(action) {  
        if (action.type === ADD_POST) {
            let newPost = {
                id:5, 
                message: this._state.profilePage.newPostText,
                likesCount: 0
              };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubsriber(this._state);}
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubsriber(this._state);
            }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
          this._state.dialogsPage.newMessagesBody = action.body;
          this._callSubsriber(this._state);
          }
        else if (action.type === SEND_MESSAGE) {
          let body = this._state.dialogsPage.newMessagesBody = action.body;
          this._state.dialogsPage.newMessagesBody = '';
          this._state.dialogsPage.messages.push({id:6, message: body});
          this._callSubsriber(this._state);
            }
    }
    }
   export  const addPostActionCreator = ()=>({ type:ADD_POST })
   export const  updateNewPostTextActionCreator = (text)  => ({type:UPDATE_NEW_POST_TEXT, newText: text})
   
   export  const sendMessageCreator = ()=>({ type :SEND_MESSAGE })
   export const  updateNewMessageBodyCreator = (body)  => ({type:UPDATE_NEW_MESSAGE_BODY, body: body})
   

         

    

    
     
    
     

  export default store;
  window.store = store;