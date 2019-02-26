import React from 'react';
import './SearchContainer.css';
import SearchResults from '../components/SearchResults';
import axios from 'axios';
import { withRouter } from 'react-router';
import FeedEditor from '../components/FeedList';


const locationHashChanged =() => {
    if (window.location.hash) {
      window.history.go(window.location.hash)
    }

    /*this.props.history.push('/search/'+q)*/
  }
  
  window.onhashchange = locationHashChanged;

class SearchContainer extends React.Component {
    _isMounted = false;
        constructor(props) {
            super(props)
            this.props.history.listen((location, action) => {
                console.log(this.props.history);
              })
            

            this.state = {
                currentSeach: '', 
                params: this.props.match.params.search_query,
                data: false, 
                dataSet: [],
                show: 10,
                }
            }

        componentDidMount() {   
            axios({
                method: 'get',
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                  part: 'snippet',
                  maxResults: 10,
                  videoDefinition: 'high',
                  type: 'video',
                  videoEmbeddable: 'true',
                  key: 'AIzaSyAWuvvtDlRzMO1nkrB5OZEG8-jzCQZzEBw',
                  q: window.location.hash.slice(8) ,
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
      return <>
        <div className='container-fluid'>
        <hr></hr>
            <div className='row'></div>
            <div className='row'>
                    <div className="col-2">
                        <FeedEditor></FeedEditor>
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
