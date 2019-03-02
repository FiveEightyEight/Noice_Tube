import React, {Fragment} from 'react';
import { withRouter} from 'react-router';
import './SearchResults.css';
import H_VideoCard from './H_VideoCard';



const SearchResults = (props) => {
    return <>
                 <Fragment key={props.resultsReturned.query}>
                            <H_VideoCard results={props}></H_VideoCard>
                        </Fragment>
            
    </>
}

export default withRouter(SearchResults);
