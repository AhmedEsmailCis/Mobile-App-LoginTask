const initialState = {
  user:null,
  loading:false,
  status:false,
};
export default (state = initialState, action) => {
   switch (action.type) {
     case 'updateLoader':
       return {
         ...state,
         loading: action.loading,
       };
     case 'updateStatus':
       return {
         ...state,
         status: action.status,
       };
       case 'setUser':
       return{
         ...state,
         user: action.user
       };
     default:
       return state;
   }
};