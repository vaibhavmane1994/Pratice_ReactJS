export default(state,action)=>{
    switch(action.type){
        case REMOVE_JOB : 
        {
            return{
                users:state.users.filter(user=>{
                     return user.id!==action.payload
                })
            }
        }
        case ADD_JOB:
           return {
                 users:[action.payload,...state.users]     
            }
            case 'Edit_USER':
                const updateUser = action.payload;

                const updateUser = state.users.map(user=>{
                      if(user.id===updateUser.id){
                          return updateUser;
                      }
                      return user;
                })

                return{
                    users:updateUser 
                }
        default:
            return state
    }
}