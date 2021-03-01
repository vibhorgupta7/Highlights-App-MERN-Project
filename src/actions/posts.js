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

export const updatePost = (id,post) => async (dispatch) => {
    try{
        const { data } = await api.updatePost(id,post);

        dispatch({ type: 'UPDATE', payload: data});
    }catch(error){
        console.log(error);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try{
        await api.deletePost(id);

        dispatch({ type: 'DELETE', payload: id });
    }catch(error){
        console.log(error);
    }
}