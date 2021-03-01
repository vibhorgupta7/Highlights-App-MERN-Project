import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import highlights from './images/highlights.png';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Highlights</Typography>
        <img className={classes.image} src={highlights} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;





// import React , { useState, useEffect} from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// import highlight from './images/highlights.png'
// import Form from './components/Form/Form';
// import Posts from './components/Posts/Posts';
// import useStyles from './styles';
// import { useDispatch } from 'react-redux';          // this allows us to dispatch n action , it is a hook 
// import { getPosts } from './actions/posts';         // importing action

// const App = () => {
//     const [currentId,setCurrentId] = useState(null);
//     const classes = useStyles();
//     const dispatch = useDispatch();             // define the dispatch

//     useEffect(()=>{
//         dispatch(getPosts());
//     },[currentId,dispatch]);                          // we use useEffect to use dipatch

//     return(
//         <Container maxWidth="lg">
//             <AppBar className={classes.appBar} position="static" color="inherit">
//                 <Typography className={classes.heading} variant="h2" align="center">Highlights</Typography>
//                 <img className="classes.image" src={highlight} alt="Highlights" height="60" ></img>
//             </AppBar>
//             <Grow in>
//                 <Container>
//                     <Grid container justify="space-between" alignItems="stretch" spacing={3}>
//                         <Grid item xs={12} sm={7}>
//                             <Posts setCurrentId={setCurrentId}/>
//                         </Grid>
//                         <Grid item xs={12} sm={4}>
//                             <Form currentId={currentId} setCurrentId={setCurrentId}/>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Grow>
//         </Container> 
//     )
// }

// export default App; 