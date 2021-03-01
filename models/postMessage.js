import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;







// import mongoose from 'mongoose';



// const postSchema = mongoose.Schema({
//     title: String,
//     message: String,
//     creator: String,
//     tags: [String],         // array of strings
//     selectedFile: String,    // image that will be converted into string by base64
//     likeCount: {
//         type: Number,
//         default: 0
//     },
//     createdAt: {
//         type: Date,
//         default: new Date()
//     }
// });

// const postMessage = mongoose.model('postMessage',postSchema);

// export default postMessage;