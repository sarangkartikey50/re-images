const initState = {
    posts: []
}

export default function(state = initState, action){
    switch(action.type){
        case 'UPDATE_POSTS': return { ...state, posts: action.payload }
        default: return state
    }
}