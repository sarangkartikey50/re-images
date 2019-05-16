import axios from 'axios'
import db from '../db'

export const fetchPosts = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(async response => {
                dispatch({ type: 'UPDATE_POSTS', payload: response.data.sort(() => (0.5 - Math.random())) })
                let toBeCachedData = response.data.sort(function() {return 0.5 - Math.random()}).splice(5, 10)
                toBeCachedData.forEach(post => {
                    delete post.id
                })
                await db.posts.toCollection().delete()
                db.posts.bulkPut(toBeCachedData)
            })
             .catch(error => {
                 console.error('There was some error in fetching posts...', error)
             })
    }
}


export const updateCachedPosts = () => async (dispatch) => {
    let posts = await db.posts.toArray()
    dispatch({ type: 'UPDATE_POSTS', payload: posts})
}