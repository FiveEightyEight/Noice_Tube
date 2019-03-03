import React, {Fragment} from 'react';
import './HVideoCard.css';

const dealWithQuots = (title) => {
    console.log(title)
    if(title.includes('&quot;')){
        let find = '&quot;';
        let re = new RegExp(find, 'g');
        let Title = title.replace(re,'"')
        return Title
    }
    if(title.includes('&amp;')){
        let find = '&amp;';
        let re = new RegExp(find, 'g');
        let Title = title.replace(re,'&')
        return Title
    }
    else{return title}
}

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
                                  <h3 data-id={e.videoId} onClick={props.click}>{dealWithQuots(e.videoTitle)}</h3>
                                    <p className="byline" data-id={e.videoId} onClick={props.clicks}>{e.channelName} &#9702; {e.publishedAt}</p>
                                    <p data-id={e.videoId} onClick={props.click} id="vidCard">{dealWithQuots(e.description)}</p>
                                </div>
                            </div>
                        </Fragment>
                        
                })
            }
    </>
}


export default H_VideoCard;