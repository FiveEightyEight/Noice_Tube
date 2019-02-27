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
    if (input.includes('%20')){
        const newSearchQuery = input.replace('%20',' ');
        return newSearchQuery;
    }
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

        handleClick = (e) => {
           const valueId = e.target.attributes.getNamedItem('data-id').value
           this.props.history.push(`/video/${valueId}`)
           /*window.history.go(`https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`);*/
            }
        

        componentDidMount() {   
            axios({
                method: 'get',
                url: 'https://www.googleapis.com/youtube/v3/search',
                params: {
                  part: 'snippet',
                  maxResults: this.state.show,
                  videoDefinition: 'high',
                  type: 'video',
                  videoEmbeddable: 'true',
                  key: 'AIzaSyAo6hXtB20Xe0kUbr8bACLmEmAXdEaQGLk',
                  q: dealWithSpaces(window.location.hash.slice(9)),
                  pageToken: ''
                }
              })
              .then((response)=>{
                  this.setState({
                      data: true,
                      dataset: this.state.dataSet.push(response) });
              })
              .catch((error)=>{
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
                    </div>
                    <div className="col-8">
                        {
                            this.state.data === false ? <p>No Results Found</p> : <SearchResults resultsReturned={this.state.dataSet} click={this.handleClick} />
                        } 
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
      </>
      
  }
  }

  export default withRouter(SearchContainer);
