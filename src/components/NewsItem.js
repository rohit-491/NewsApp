import React, { Component } from 'react'

const NewsItem =(props)=>{

// apikey=637b82e20877465d91e9c562e0949d2c
// export class NewsItem extends Component {
//   render() {
    // let {title, description, imageUrl, newsUrl, author, date, source}=this.props;
    let {title, description, imageUrl, newsUrl, author, date, source}=props;
    return (
      <div>
        <div className="card my-4 mx-2" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex:"1"}}>
    {source}
  </span>
  <img src={!imageUrl?"https://cdn.ndtv.com/common/images/ogndtv.png":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}... </h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">by {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target='_blank' className="btn btn-dark">Read more</a>
  </div>
</div>
      </div>
    )
  }
// }

export default NewsItem