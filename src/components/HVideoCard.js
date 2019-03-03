import React, {Fragment} from 'react';
import './HVideoCard.css';



const H_VideoCard = (props) => {
    console.log("HV",props.results)
    return <>
                {
                    props.results.resultsReturned[0].items.map((e, i) => {
                        return <Fragment key={i}>
                            <div className="row" >
                              <div className="col-5">
                                <img src={e.thumbnail} alt={e.title} data-id={e.videoId} onClick={props.clicks}/>
                                </div>
                                <div className="col-7" id="listH" data-id={e.videoId} onClick={props.clicks}>
                                  <h3 data-id={e.videoId} onClick={props.click}>{e.videoTitle}</h3>
                                    <p className="byline" data-id={e.videoId} onClick={props.clicks}>{e.channelName} &#9702; {e.publishedAt}</p>
                                    <p data-id={e.videoId} onClick={props.click} id="vidCard">{e.description}</p>
                                </div>
                            </div>
                        </Fragment>
                        
                })
            }
    </>
}


export default H_VideoCard;