import express from 'express';
import cors from 'cors'
import {v4 as randomGenerator} from 'uuid'
import vote from './routes/vote.js'

const app = express();

//middleware
app.use(cors())
app.use("/vote", vote)

//function
function getRandomId(){
    return randomGenerator().substr(0,5)
}

//route
app.get('/', (req, res) => {
    res.send(getRandomId())
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});