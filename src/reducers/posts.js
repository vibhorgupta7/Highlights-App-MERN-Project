// A reducer is function that accepts two argumente-> state and action. Regarding to the action an if or switch logic is written 
export default (posts=[],action) => {
    
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'Create ':
            return posts;
        default:
            return posts;
    }
}  