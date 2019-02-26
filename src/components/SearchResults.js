import React from 'react';
import { withRouter} from 'react-router';
import './SearchResults.css';



const SearchResults = (props) => {
    console.log('B')
    return <>
                {
                    props.resultsReturned[0].data.items.map((e, i) => {
                        return <>
                            <div className="row" key={i}>
                              <div className="col-5">
                                <img src={e.snippet.thumbnails.medium.url} alt={e.snippet.title} key={i}/>
                                </div>
                                <div className="col-7">
                                  <h3>{e.snippet.title}</h3>
                                    <p className="byline">{e.snippet.channelTitle} &#9702; {e.snippet.publishedAt}</p>
                                    <p>{e.snippet.description}</p>
                                </div>
                            </div>
                        </>
                        })
                }
    </>
}

export default withRouter(SearchResults);

