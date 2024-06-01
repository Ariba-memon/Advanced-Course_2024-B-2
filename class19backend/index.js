import {db,connectToDb} from './database.js'
import express from 'express'

const app = express();
app.use(express.json());

// *******************GET REQUEST ******************
app.get('/api/articles/:name', async (req,res) =>{
    const {name} = req.params;
    const article = await db.collection('articles').findOne({name});
    if(article){
        res.json(article);
    }else(
        res.sendStatus(404)
    )
})

// *******************PUT REQUEST ******************
app.put('/api/articles/:name/favoriteblog', async (req,res) =>{
    const {name} = req.params;
    await db.collection('articles').updateOne({name},{
      $inc: {favoriteblog:1}  
    })
    const article = await db.collection('articles').findOne({name});
    if(article){
        res.json(article);
    }else(
        res.sendStatus(404)
    )
})

// *******************POST REQUEST ******************

app.post('/api/articles/:name/comments', async (req,res) =>{
    const {name} = req.params;
    const {postedBy, text,feedback} = req.body;
    await db.collection('articles').updateOne({name},{
        $push: {comments: {postedBy, text,feedback}}  
      })
    const article = await db.collection('articles').findOne({name});
    if(article){
        res.json(article);
    }else(
        res.sendStatus(404)
    )
})
connectToDb(() =>{
    console.log('Sucesss');
    app.listen(6000,() =>{
        console.log('Server is listening on 6000');
    })
})