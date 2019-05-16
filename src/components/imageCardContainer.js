import React, { lazy, Suspense, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { fetchPosts, updateCachedPosts } from '../actions/index'
import { Grid } from '@material-ui/core'
import faker from 'faker'

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchPosts: () => { dispatch(fetchPosts()) },
        updateCachedPosts: () => { dispatch(updateCachedPosts())}
    }
}

const ImageCard = lazy(() => import('./imageCard'))

const style = theme => ({
    root: {
        padding: '20px',
        background: theme.palette.appBackground
    },
    imageLoader: {
        height: '200px',
        width: '300px',
        background: theme.palette.loaderImageColor,
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    bodyLoader: {
        height: '100px',
        width: '300px',
        background: theme.palette.loaderBodyColor,
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px'
    }
})

const CardLoader = (classes) => {
    return (
        <div>
            <div className={classes.imageLoader}></div>
            <div className={classes.bodyLoader}></div>
        </div>
    )
}

const ImageCardContainer = (props) => {
    const { classes, posts } = props

    useEffect(() => {
        if(navigator.onLine){
            props.fetchPosts()
        } else {
            props.updateCachedPosts()
        }
    }, [])

    if(!posts.length) return (<div style={{textAlign:'center', marginTop: '1em', fontWeight: 'bold'}}>Loading...</div>)

    return (
        <div className={classes.root}>
            <Grid container spacing={16}>
                {posts.map((post, index) => {
                    return (
                        <Grid key={index} item xs={12} md={4} sm={6} lg={3}>
                            <Suspense fallback={CardLoader(classes)}>
                                <ImageCard image={faker.image.food()} post={post} />
                            </Suspense>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default connect(mapStateToProps,  mapDispatchToProps)(withStyles(style)(ImageCardContainer))