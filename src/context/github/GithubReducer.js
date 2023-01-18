
const GithubReducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_USERS':
            return {
                ...state,
                users: action.payload,
                loader: false
            }
        
        case 'SET_LOADING':
            return {
                ...state,
                loader: true
            }
        
        case 'CLEAR_USERS':
            return {
                ...state,
                users: [],
            }
        case 'GET_USER_AND_REPOS':
            return {
                ...state,
                user: action.payload.user,
                repos: action.payload.repos,
                loader: false
            }
        default:
            return state;
    }
}

export default GithubReducer
