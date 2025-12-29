import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
const News = ({ category }) => {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=e75298a8aaeb470db25470d2fb78c65d`
    ).then(res => res.json())
    .then((d)=>
    setFeed(d.articles || []))
  }, [category]);

  const prop ={
    display:"grid",
    gridTemplateColumns : "repeat(3,1fr)",
    gap :"15px",
    padding:"20px"
  }

  return (<div style={prop}>
    {feed.map(
        (f,i)=>
    (<NewsItem key={i} 
        title ={f.title}
        description = {f.description}
        image = {f.urlToImage}
        url = {f.url}/>
    )
        )
    }

    </div>);
};


export default News;
