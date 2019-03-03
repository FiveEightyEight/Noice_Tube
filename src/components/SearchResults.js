import React, {Fragment} from 'react';
import { withRouter} from 'react-router';
import './SearchResults.css';
import HVideoCard from './HVideoCard';



const SearchResults = (props) => {
    return <>
                 <Fragment key={props.resultsReturned.query}>
                            <HVideoCard results={props} clicks={props.click}></HVideoCard>
                        </Fragment>
                        <button className='btn mb-5 mt-2' id="svg">
                        <svg onClick={props.clickLoad} data-id={props.query}>
                        <rect x="5" y="5" rx="25" fill="none" width="190" height="50"></rect>
                    </svg>
                    <span className="spanT">More</span>
                    </button>
            
    </>
}

export default withRouter(SearchResults);
