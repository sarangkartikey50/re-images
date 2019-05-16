const initState = {
    posts: [],
    isDarkTheme: false
}

export default function(state = initState, action){
    switch(action.type){
        case 'UPDATE_POSTS': return { ...state, posts: action.payload }
        case 'UPDATE_THEME': return { ...state, isDarkTheme: action.payload }
        default: return state
    }
}