
import React, {useEffect, useState} from 'react'
import NewsItem from './newsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';






export default function News(props) {
    const [articles,setArticles] = useState([]);
    const [loader,setLoader] = useState(false);
    const [page,setPage] = useState(1);
    const [totalResults,setTotalResults] = useState(0);


    const capatalizeFunc = (str) =>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    document.title = (props.category==="general"?"News App":"News App - " + capatalizeFunc(props.category));
    


    // this function is not working with parameters so i cancel this one. but also keep this code if any way to fix this
    // handleFunc = async (n) => {
    //     setState({ loader: false });
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=5f8ebdba7d6043b4975f393691cd96a3&page=${state.page + n}&pageSize=${props.pageSize}&category=${props.category}`;
    //     let fetchData = await fetch(url);
    //     let parsedData = await fetchData.json();
    //     setState({
    //         articles: parsedData.articles,
    //         page: state.page + n,
    //         loader: true
    //     });
    // }
    

    useEffect( () => {

        async function fetchData() {
        props.progress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&category=${props.category}`;
        
        let fetchData = await fetch(url);
        props.progress(50)
        let parsedData = await fetchData.json();
        props.progress(70)
        setArticles(parsedData.articles)
        setLoader(true)
        setTotalResults(parsedData.totalResults);

        props.progress(100)
        }
        fetchData();

        // this comment for useEffect warning preventing
        // eslint-disable-next-line
},[]);

    // handleClick = async (n) => {
    //     setLoader(false);
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page + n}&pageSize=${props.pageSize}&category=${props.category}`;
    //     let fetchData = await fetch(url);
    //     let parsedData = await fetchData.json();
    //     setArticles(parsedData.articles)
    //     setPage(page + 1)
    //     setLoader(true)


    //     // to a better user experience. // also this is not working properly with parameters so i cancel this function and use the old method
    //     // handleFunc(n);
    //     // console.log(state.articles.length)
    //     // console.log(state.page)
    // }

    const fetchMoreData = async() => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}&category=${props.category}`;
        let fetchData = await fetch(url);
        let parsedData = await fetchData.json();
        setArticles(articles.concat(parsedData.articles))
        setPage(page + 1)
        setLoader(true)
        setTotalResults(parsedData.totalResults);
      };
    
        if (loader) {
            return (

                <div className='container' style={{marginTop:"70px"}}>
                    <h2>Top {(props.category==="general"?"":" " + capatalizeFunc(props.category))} Headlines</h2>
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner height={20+"vh"} />}
                         >
            <div className="container">
                    <div className="row mt-3">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageURL={!element.urlToImage ? "https://img.etimg.com/thumb/msid-97528055,width-1070,height-580,imgsize-13226,overlay-economictimes/photo.jpg" : element.urlToImage} newsURL={element.url} author={element.author} time={element.publishedAt} source={element.source.name}/>
                            </div>
                        })}

                    </div>
            </div>
                    </InfiniteScroll>

                    {/* <div className="container d-flex justify-content-between my-5">
                        <button type="button" disabled={state.page <= 1} className="btn btn-info" onClick={() => handleClick(-1)}>&larr; Prev</button>
                        {/* <button type="button" disabled={state.articles.length < 20} className="btn btn-info" onClick={() => handleClick(1)}>Next &rarr;</button> */}
                        {/*<button type="button" disabled={state.articles.length < props.pageSize} className="btn btn-info" onClick={handleClick.bind(this, 1)}>Next &rarr;</button>
                    </div> */}

                </div>
            )
        } else {
            return (

                <Spinner height={100+"vh"} />
                

            )
        }
    }

News.defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general"
}
 News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}
