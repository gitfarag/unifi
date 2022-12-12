import express, { json,Request,Response } from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./router";
import dotenv from "dotenv";
import connectDB from './provider/db'
import morgan from 'morgan'

dotenv.config();

const app = express();
const port = (process.env.PORT as unknown) as number

app.use(cors(), json(), helmet(), morgan('dev'));


app.listen(port,async () => {

    connectDB()
    .then(()=>{
      console.log(`server is on http://localhost:${port}`)}
      )
    .catch(err=>{console.log(err)})

  
});
app.get('/',(rq:Request,res:Response)=>{
res.send("this is the home for todo api")
})
app.use("/api", router);

export default app;
