import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';


const Form = () => {
    const [postData,setPostData] = useState({ creator:'', title:'', message:'', tags:'', image:'', selectedFile:''});

    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()              // not to get refrsh in the brower
    
        dispatch(createPost(postData));        // dispatching action when submit button is clicked, sending all information user has entered in the form
    }

    const clear = () => {

    }

    return(
        <Paper className={classes.paper}>   
            <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Highlight</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <TextField name="tags" variant="outlined" label="Creator" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple="false" onDone={(base64)=> setPostData({ ...postData, selectedFile:base64})}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary" type="submit" fullWidth>Submit</Button>
                
                <Button className={classes.buttonClear}variant="contained" size="large" color="secondary" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}

export default Form;