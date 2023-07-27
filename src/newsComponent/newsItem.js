import React from 'react'


export default function NewsItem(props){
    let { title, description, imageURL, newsURL, author, time, source } = props;
    return (
      <>
        <div className="card">
        <span className="position-absolute source badge badge-danger">{source}</span>
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-primary">Author {author?author:"Unknown"} Published At {new Date(time).toDateString()}</small></p>
            <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-dark btn-sm">Read More</a>
          </div>
        </div>
      </>
    )
  }
