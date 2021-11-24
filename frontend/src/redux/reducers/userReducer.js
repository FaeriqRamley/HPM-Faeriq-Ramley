const userReducer = (state = {dbUUID:null,username:null,apiKey:null,apiToken:null,boardIdList:[]}, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return action.payload
      case 'LOGOUT_USER':
        return {dbUUID:null,username:null,apiKey:null,apiToken:null,boardIdList:[]}
      case 'UPDATE_BOARD_ID_LIST':
        return {...state,boardIdList:action.payload}
      default:
        return state
    }
}

export default userReducer;