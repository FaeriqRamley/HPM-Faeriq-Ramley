const userReducer = (state = {dbUUID:null,username:null,apiKey:null,apiToken:null}, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return action.payload
      case 'LOGOUT_USER':
        return {dbUUID:null,username:null,apiKey:null,apiToken:null}
      default:
        return state
    }
}

export default userReducer;