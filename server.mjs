import express from 'express'
import "dotenv/config"
const PORT = process.env.PORT || 5050;
const app = express();



app.use(express.json());

import grades from './routes/grades.mjs'

app.use("/grades", grades)


app.listen(PORT,()=>{
    console.log("The server heard some nonsense at table", PORT)
});