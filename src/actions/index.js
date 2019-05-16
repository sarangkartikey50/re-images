import axios from 'axios'

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(response => {
                dispatch({ type: 'UPDATE_POSTS', payload: response.data })
             })
             .catch(error => {
                 console.error('There was some error in fetching posts...', error)
             })
    }
}