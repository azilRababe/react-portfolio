import express from 'express'
import NewsAPI from 'newsapi'
import dotenv from 'dotenv'
import axios from 'axios'
import cors from 'cors'

import { createProxyMiddleware } from 'http-proxy-middleware'

dotenv.config()
const app = express()
const newsapi = new NewsAPI(process.env.NEWS_API_KEY)

app.use(cors())
app.use(
  '/api',
  createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true })
)

app.get('/news', (req, res) => {
  axios
    .get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    )
    .then((response) => {
      newsapi.v2
        .topHeadlines({
          category: 'technology',
          language: 'en',
          country: 'us',
          pageSize: 10,
        })
        .then((newsApiResponse) => {
          console.log(newsApiResponse.articles[0])
          res.status(200).json(newsApiResponse.articles)
        })
        .catch((error) => {
          console.error('Error fetching NewsAPI:', error)
          res.status(500).json({ error: 'Error fetching NewsAPI' })
        })
    })
    .catch((error) => {
      console.error('Error fetching NewsAPI:', error)
    })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`)
})
