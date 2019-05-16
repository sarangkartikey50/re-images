import React, { lazy, Suspense, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/index'
import { Grid } from '@material-ui/core'

const mapStateToProps = (state) => {
    return {
        posts: state.postsReducer.posts
    }
}

const ImageCard = lazy(() => import('./imageCard'))

const style = {
    root: {
        padding: '20px'
    },
    imageLoader: {
        height: '200px',
        width: '300px',
        background: '#efefef',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px'
    },
    bodyLoader: {
        height: '100px',
        width: '300px',
        background: '#fafafa',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px'
    }
}

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
        props.fetchPosts()
    }, [])

    if(!posts.length) return (<div>Loading...</div>)

    return (
        <div className={classes.root}>
            <Grid container spacing={16}>
                {posts.map(post => {
                    return (
                        <Grid item xs={12} md={3}>
                            <Suspense fallback={CardLoader(classes)}>
                                <ImageCard post={post} />
                            </Suspense>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default connect(mapStateToProps, { fetchPosts })(withStyles(style)(ImageCardContainer))