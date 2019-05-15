export default function(state = null, action){
    switch(action.type){
        case 'DUMMY': return { dummy: 'hello world'}
        default: return state
    }
}