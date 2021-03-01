// A reducer is function that accepts two argumente-> state and action. Regarding to the action an if or switch logic is written 
export default (posts=[],action) => {
    
    switch(action.type){
        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);         //return all posts except post thta needs to be deletd
        case 'UPDATE':
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
            // It will iterate over all posts and when id match return the updated post
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}  