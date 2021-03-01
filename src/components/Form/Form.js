import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;






// import React, { useState, useEffect } from 'react';
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// import FileBase from 'react-file-base64';
// import useStyles from './styles';
// import { useDispatch, useSelector } from 'react-redux';
// import { createPost, updatePost } from '../../actions/posts';
 


// const Form = ({currentId, setCurrentId}) => {
    
//     const [postData,setPostData] = useState({ creator:'', title:'', message:'', tags:'', image:'', selectedFile:''});
//     const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);         // retriving the post to be updated fro global state                     
//     const classes = useStyles();
//     const dispatch = useDispatch();


 
//     useEffect(() => {                           // useEffect has to parameters. useEffect(funct a, arr[b]), when arr[b] changes then function a gets called
//         if (post) setPostData(post);
//     }, [post]);
    


//     const handleSubmit = async (e) => {
//         e.preventDefault();                     // not to get refrsh in the brower
    
//         if (currentId) {                                          // if there is a currentId in a state which means a post is slecte, so means we are editing the post. So when we click submit the update function should happen
//           dispatch(updatePost(currentId,postData));
       
//         } else {
//           dispatch(createPost( postData));                // dispatching action when submit button is clicked, sending all information user has entered in the form
         
//         }
//         clear();
//     };

//     const clear = () => {
//         setCurrentId(null);
//         setPostData({ creator:'', title:'', message:'', tags:'', image:'', selectedFile:''});

//     }

    
//     return(
//         <Paper className={classes.paper}>   
//             <form className={`${classes.root} ${classes.form}`} noValidate autoComplete="off" onSubmit={handleSubmit}>
//                 <Typography variant="h6"> {currentId ? 'Editing' : 'Creating'} a Highlight</Typography>
//                 <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
//                 <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
//                 <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
//                 <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                
//                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
               
//                 <Button className={classes.buttonSubmit} variant="contained" size="large" color="primary" type="submit" fullWidth>Submit</Button>
                
//                 <Button className={classes.buttonClear}variant="contained" size="large" color="secondary" onClick={clear} fullWidth>Clear</Button>

//             </form>
//         </Paper>
//     )
// }

// export default Form;