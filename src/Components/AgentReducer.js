import { getCurrentAgent } from "../Pages/SignIn/Api";


export function agentReducer(state , action){
    
    switch (action.type) {
        case "name": {
          state.name = action.content;
          return state;
        }
        case "surname": {
          state.surname = action.content;
          return state;
        }
        case "about": {
          state.about = action.content;
          return state;
        }
        default: {
          return state;
        }
      }
    
}