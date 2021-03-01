import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import dotenv from 'dotenv';


const app = express();
dotenv.config({path: './.env'});

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);

// const CONNECTION_URL = 'mongodb+srv://Vibhor:123@cluster0.vmlm0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';     // url taken from mongoDB atlas cluster
const PORT = process.env.PORT|| 5001;

app.get('/',(request,response)=>{
  response.send('Hello to Highlights API');
});

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> app.listen(PORT))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);










// // npm install body-parser (enables us to send post requests) cors (enables cross origin request) express ( framework for routing of app) mongoose (to create models of our posts) nodemon(so we dont have to have to manually reset the server every time we make a change)
// import express from 'express';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import postRoutes from './routes/posts.js';

// const app = express();              // initialising app with express, now we can use diff methods of express
// dotenv.config();

// app.use(bodyParser.json({limit: "30mb", extended: "true"}));                // 30mb because images are also being sent        
// app.use(bodyParser.urlencoded({limit: "30mb", extended: "true"}));          //Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
// app.use(cors());

// app.use('/posts', postRoutes);             // whenever localhost:8000/posts it will redirect to posts.js


// // const CONNECTION_URL = 'mongodb+srv://Vibhor:123@cluster0.vmlm0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';     // url taken from mongoDB atlas cluster
// const PORT = process.env.PORT || 5001;

// mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(()=> app.listen(PORT, ()=> console.log(`Server running successfully on port: ${PORT}`)) )     // if connection is successfull then do this
//     .catch((error)=> console.log(error.message) );                                                      // if not successful

// mongoose.set('useFindAndModify',false);                         // so we dont get faltu warnigs in console 