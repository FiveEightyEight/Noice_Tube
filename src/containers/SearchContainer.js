import React from 'react';
import './SearchResults.css';
import SearchResults from '../components/SearchResults';
import axios from 'axios'


class SearchContainer extends React.Component {
    _isMounted = false;
        constructor(props) {
            super(props)
            this.state = {
                currentSeach: '', 
                urlParam: '',
                data: false, 
                dataSet: [],
                show: 10,
                }
            }
        

        componentDidMount() {
            this._isMounted = true;
            axios({
                method: 'get',
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                  part: 'snippet',
                  maxResults: 10,
                  videoDefinition: 'high',
                  type: 'video',
                  videoEmbeddable: 'true',
                  key: 'AIzaSyAo6hXtB20Xe0kUbr8bACLmEmAXdEaQGLk',
                  q: window.location.hash.slice(8) || this.state.currentSeach,
                  pageToken: ''
                }
              })
              .then((response)=>{
                  console.log(response)
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
    console.log(this.state.dataSet)
      return <>
        <div className='container-fluid'>
            <div className='row'>
                <h1>Search Results </h1>
            </div>
            <div className='row'>
                    <div className="col-2"></div>
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

  export default SearchContainer;

