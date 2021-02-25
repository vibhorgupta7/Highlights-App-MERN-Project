import * as api from '../api';

// Action creaters: They are functions that return actions, actions have two types : type and payload
// eg: 
// const getPost = () => async (dispatch) =>{
//     const action = { type: 'FETCH_ALL', payload: []}

//     dispatch(action);
// }

export const getPosts = () => async(dispatch) => {
    try{
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });         // dispatching action
    }catch(error){
        console.log(error.message);
    }
}

export const createPost = (post) => async(dispatch) => {
    try{
        const { data } = await api.createPost(post);

        // console.log(data);
        dispatch({ type: 'CREATE', payload: data})
    }catch(error){
        console.log(error);
    }
}