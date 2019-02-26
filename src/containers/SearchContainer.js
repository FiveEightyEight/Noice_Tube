import React from 'react';
import './SearchContainer.css';
import SearchResults from '../components/SearchResults';
import axios from 'axios';
import { withRouter } from 'react-router';


const locationHashChanged =() => {
    if (window.location.hash) {
      window.history.go(window.location.hash)
    }

    /*this.props.history.push('/search/'+q)*/
  }
  
  window.onhashchange = locationHashChanged;

const dealWithSpaces = (input) => {
    console.log('Input', input)
    if (input.includes('%20')){
        const newSearchQuery = input.replace('%20',' ');
        console.log('New Return', newSearchQuery)
        return newSearchQuery;
    }
    console.log('Nothing Changed')
    return input;
}
class SearchContainer extends React.Component {
        constructor(props) {
            super(props)
            this.props.history.listen((location, action) => {
              })
            

            this.state = {
                currentSeach: '', 
                params: this.props.match.params.search_query,
                data: false, 
                dataSet: [],
                show: 1,
                }
            }

        componentDidMount() {   
            axios({
                method: 'get',
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                  part: 'snippet',
                  maxResults: 2,
                  videoDefinition: 'high',
                  type: 'video',
                  videoEmbeddable: 'true',
                  key: 'AIzaSyAo6hXtB20Xe0kUbr8bACLmEmAXdEaQGLk',
                  q: dealWithSpaces(window.location.hash.slice(9)),
                  pageToken: ''
                }
              })
              .then((response)=>{
                  console.log("Boo")
                  this.setState({
                      data: true,
                      dataset: this.state.dataSet.push(response) });
              })
              .catch((error)=>{
                  console.log(error);
                  this.setState({
                      data: false,
                  })
              });        
            }

render(){
    console.log("A", this.state.dataSet)
      return <>
        <div className='container-fluid'>
        <hr></hr>
            <div className='row'></div>
            <div className='row'>
                    <div className="col-2">
                    </div>
                    <div className="col-8">
                        {
                            this.state.data === false ? <p>No Results Found</p> : <SearchResults resultsReturned={this.state.dataSet} />
                        } 
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
      </>
      
  }
  }

  export default withRouter(SearchContainer);

