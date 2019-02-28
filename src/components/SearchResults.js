import React, {Fragment} from 'react';
import { withRouter} from 'react-router';
import './SearchResults.css';



const SearchResults = (props) => {
    console.log('B')
    return <>
                {
                    props.resultsReturned[0].data.items.map((e, i) => {
                        return <Fragment key={i}>
                            <div className="row" key={i}>
                              <div className="col-5">
                                <img src={e.snippet.thumbnails.medium.url} alt={e.snippet.title} data-id={e.id.videoId} onClick={props.click}/>
                                </div>
                                <div className="col-7">
                                  <h3 data-id={e.id.videoId} onClick={props.click}>{e.snippet.title}</h3>
                                    <p className="byline">{e.snippet.channelTitle} &#9702; {e.snippet.publishedAt}</p>
                                    <p data-id={e.id.videoId} onClick={props.click}>{e.snippet.description}</p>
                                </div>
                            </div>
                        </Fragment>
                        })
                }
    </>
}

export default withRouter(SearchResults);

