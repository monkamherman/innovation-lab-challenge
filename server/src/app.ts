
import express from 'express' 
import cors from 'cors'
import router from './routes/route'

const app = express()



const port = 3000

app.use(cors({
  origin: '*',
}))
app.use(express.json())
app.use(router)


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`localhost: ${port}`);
  
  console.log(`app listening on port ${port}`)
})