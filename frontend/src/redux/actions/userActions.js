export const loginUser = (userDetails) => {
    // fetch api here to get proper userInfo
    const userInfo = {
        username: userDetails.username,
        apiKey: '123456',
        apiToken: '123abc'
    }
    return {
        type:'LOGIN_USER',
        payload:userInfo
    }
}