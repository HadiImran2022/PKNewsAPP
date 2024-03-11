const NewsItem = (props) => {

    let {title, description, imgUrl, newsUrl, publishedAt, author ,source} = props
  

    return (
      <div className="my-3">
        <div className="card">
          <div className="">
            <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img src={!imgUrl?"https://c8.alamy.com/comp/EMJWND/error-message-on-computer-screen-EMJWND.jpg":imgUrl} className="card-img-top" alt={imgUrl===imgUrl? "image" : "there is no image available for this news" } />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">
             {description}...
            </p>
            {/* <p className="card-text fw-bold">By {!author?'Unknown':author} on {publishedAt}...</p> */}
            {/* <p className="card-text fw-bold">{author && author.includes('By', 1) ? author : 'By ' + author} on {publishedAt}...</p> */}
            <p className="card-text fw-bold">By {author && !author.startsWith('By ') ? author : 'Unknown'} on {publishedAt}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
