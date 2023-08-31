import React, { useEffect, useState } from 'react'
import axios from 'axios'

const News = () => {
  const [news, setNews] = useState([])
  const getNews = () => {
    axios
      .get('/api/news')
      .then((response) => {
        console.log(response.data)
        setNews(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }
  useEffect(() => {
    getNews()
  }, [])
  return (
    <div>
      {news && news.map((item) => <div key={item.id}>{item.title}</div>)}
    </div>
  )
}

export default News
