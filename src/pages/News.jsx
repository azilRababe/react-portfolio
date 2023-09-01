import React, { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'

const News = () => {
  const [news, setNews] = useState([])

  const getNews = () => {
    axios
      .get('/api/news')
      .then((response) => {
        const filteredNews = response.data.filter(
          (item) => item.title && item.description
        )
        setNews(filteredNews)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <>
      <div className="">
        <div className="flex flex-col items-center my-10 space-y-5">
          <h1 className="text-3xl font-bold uppercase">Tech News & Insights</h1>
          <p className="text-center">
            Here's a sneak peek into the latest happenings in the world of tech.
          </p>
        </div>
        <div className="grid md:grid-cols-1 place-items-center">
          {news &&
            news.map((article, index) => (
              <div
                className="px-2 md:px-6 my-3 w-full text-white_  flex flex-col items-center"
                key={index}
              >
                <div className="max-w-xl text-left flex flex-col w-full items-center justify-center md:p-4 md:border border-red_  rounded-xl">
                  <div className="w-full rounded-xl flex-col xl:flex-row bg-transparent shadow-md">
                    <Link to={article.url} target="_blank">
                      <div
                        className="rounded-t-xl w-full h-64 shadow-sm bg-cover hover:brightness-50 brightness-75 transition-all duration-100 bg-center"
                        style={{
                          backgroundImage: `url("${article.urlToImage}")`,
                        }}
                      ></div>
                    </Link>

                    <div className="w-full p-3 flex flex-col justify-between h-auto overflow-auto lg:h-auto">
                      <h1 className="text-left text-sm md:text-lg font-bold leading-normal">
                        {article.title}
                      </h1>
                      <p className="text-sm">{article.description}</p>

                      <div className="flex mt-4">
                        <Link
                          target="_blank"
                          to={article.url}
                          className="transition-all duration-100 text-center p-2 rounded-md text-red_ w-1/2 bg-gradient-to-r border border-red_ hover:bg-red_ hover:text-white_"
                        >
                          <button>View Full-Size</button>
                        </Link>

                        <div className="flex flex-col ml-4 w-1/2">
                          <h2 className="text-center text-xs mt-1 mb-2 text-white_  font-bold uppercase">
                            Published
                          </h2>

                          <span className="self-center text-xs text-white_ -mt-2">
                            {moment(article.publishedAt).format('LL')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default News
