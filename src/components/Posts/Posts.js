import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux'           // fetch the data from global redux store 
import { Grid, CircularProgress } from '@material-ui/core';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    
    
    return(
        !posts.length? <CircularProgress/> 
        : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map(post=>(
                    <Grid key={post.id} item xs={12} s={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;