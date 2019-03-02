import React, {Fragment} from 'react';
import { withRouter} from 'react-router';
import './SearchResults.css';
import HVideoCard from './HVideoCard';



const SearchResults = (props) => {
    return <>
                 <Fragment key={props.resultsReturned.query}>
                            <HVideoCard results={props} clicks={props.click}></HVideoCard>
                        </Fragment>
            
    </>
}

export default withRouter(SearchResults);
