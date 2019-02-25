import React from 'react';
import { withRouter } from 'react-router';



const SearchResults = (props) => {
    return <>
        <div>
                {
                    props.resultsReturned[0].data.items.map((e, i) => {
                        return <>
                            <div className="row" key={i}>
                              <div className="col-5">
                                <img src={e.snippet.thumbnails.medium.url} alt={e.snippet.title} key={i}/>
                                </div>
                                <div className="col-7">
                                  <h5>{e.snippet.title}</h5>
                                    <span>{e.snippet.channelTitle} * {e.snippet.publishedAt}</span>
                                 <div>{e.snippet.description}</div>
                                </div>
                            </div>
                        </>
                        })
                }
                </div>
    </>
}

export default withRouter(SearchResults);

