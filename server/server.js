import express from "express"
import axios from "axios"
import cors from "cors"
import "dotenv/config"

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())

try{
    app.get('/recipes/:query', async (req, res) => {
        const response = await axios.get(
            `https://api.edamam.com/search?q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&diet=balanced`
        )
        //onsole.log(response.data.hits)
        res.json(response.data.hits)
    })
} catch(error)
{
    alert(error)
}

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

