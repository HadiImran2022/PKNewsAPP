import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState("")
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  } 

  const updateNews = async () => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b3a9cfb70944453784aa83f6d691fc2d&page=${page}&pageSize=${props.pageSize}`;
    // setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let getData = await data.json();
    props.setProgress(65)
    console.log(getData);
    setArticles(getData.articles)
    setTotalResults(getData.totalResults)
    setLoading(false)
    props.setProgress(100)

  }

  useEffect(() => {
  document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
    updateNews()
  }, [])


  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=b3a9cfb70944453784aa83f6d691fc2d&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let getData = await data.json();
    console.log(getData);
    setArticles(articles.concat(getData.articles))
    setTotalResults(getData.totalResults)
  };

    return (
        <>
          <h2 className="text-center my-4 mt-5">Programmer News - Top Headlines</h2>
          {loading && <Spinner/>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length <= totalResults}
            loader={<Spinner/>}
          >
            <div className="container">
            <div className="row">
              {articles.map((element, index) => {
                return (
                  <div className="col-lg-3" key={index}>
                    <NewsItem
                      title={
                        element.title
                          ? element.title.slice(0, 45)
                          : "no title available"
                      }
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "no description available"
                      }
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      publishedAt={element.publishedAt}
                      author={element.author}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
            </div>
          </InfiniteScroll>
        </>
    );
}

News.defaultProps = {
  country: "us",
  pageSize: "8",
  category: "sports",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
