
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
                 ]       
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
        if (action.type ==='ADD-POST') {
            let newPost = {
                id:5, 
                message: this._state.profilePage.newPostText,
                likesCount: 0
              };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubsriber(this._state);}
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubsriber(this._state);
            }

    }
    }



         

    

    
     
    
     

  export default store;
  window.store = store;