import React from 'react'

const NewsItem = (p) => {
    const img_prop ={
        height:"200px",
        width:"300px",
        objectFit :"cover"
    }
  return (
    <div style={{border:'2px solid black'}}>
        <h3>{p.title}</h3>
        <p>{p.description}</p>
        <img src= {p.image || "https://placehold.co/200x300"} style={img_prop} alt="placeholder"/>
        <a href={p.url}><p>{p.url}</p></a>
        </div>
  )
}

export default NewsItem