import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import NewsItem2 from "./NewsItem2";
import "../styles/newsItem2.css";
import { useParams } from "react-router-dom";

const News = (props) => {
  let { category } = useParams();
  let [heading, setheading] = useState("");
  let [articles, setarticles] = useState([]);

  async function load() {
    let url;
    if (category == null) {
      setheading("Top Headlines");
      console.log("null category");
      url = `https://bing-news-search1.p.rapidapi.com/news/search?q=headlines&freshness=Day&textFormat=Raw&count=27&cc=in`;
    } else {
      setheading(category);
      url = `https://bing-news-search1.p.rapidapi.com/news/search?q=${category}&freshness=Day&textFormat=Raw&count=27&cc=in`;
    }

    let data = await fetch(url, {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    });
    let parseData = await data.json();
    setarticles(parseData.value);
  }

  useEffect(() => {
    load();
  }, [category]);

  return (
    <div>
      <div className="news-main-container">
        <h2 className="news-heading">{heading}</h2>
        <div className="news-container">
          {articles?.map((element, index) => {
            return (
              <NewsItem2
                imgUrl={element.image != null && element.image.thumbnail != null ? element.image.thumbnail.contentUrl: null}
                title={element.name? element.name: null}
                description={element.description? element.description: null}
                source={element.provider && element.provider[0] != null && element.provider[0].name != null ? element.provider[0].name: null}
                date={element.datePublished != null ? element.datePublished : null}
                newsUrl={element.url != null ? element.url : null}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
