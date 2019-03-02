import React, {Fragment} from 'react';
import { withRouter} from 'react-router';



const Explorer = (props) => {
    console.log("P",props.results)
    return <>
                 <Fragment key={props.query}>
                      <div data-content={props.query} onClick={props.clickLoad}>{props.query}</div>
                 </Fragment>
            
    </>
}

export default withRouter(Explorer);