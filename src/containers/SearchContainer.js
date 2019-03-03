import React from 'react';
import './SearchContainer.css';
import SearchResults from '../components/SearchResults';
import { Spinner } from 'reactstrap';
import { withRouter } from 'react-router';
import { search, buildSearchResultObject, searchLoadMore } from '../services/main';


const locationHashChanged = () => {
    if (window.location.hash) {
        window.history.go(window.location.hash)
    }

    /*this.props.history.push('/search/'+q)*/
}

window.onhashchange = locationHashChanged;

const dealWithSpaces = (input) => {
    if (input.includes('%20')) {
        const newSearchQuery = input.replace('%20', ' ');
        return newSearchQuery;
    }
    return input;
}

const query = window.location.hash.slice(9)

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

    handleLoadMore = () => {
        searchLoadMore(this.state.currentSeach, this.state.dataSet, this.state.nextPage)
            .then(data => {
                this.setState({
                    dataSet: data.dataSet,
                    previousPage: data.newPageToken,
                    nextPage: data.previousPageToken,
                })
            })
            .catch( err => {
                console.log(err)
            })
    }


    componentDidMount() {
        search(dealWithSpaces(query), this.state.show)
            .then((data) => {
                return buildSearchResultObject(data, query)
            })
            .then((obj) => {
                this.setState({
                    data: true,
                    dataset: this.state.dataSet.push(obj),
                    nextPage: obj.nextPageToken,
                });
            })
            .catch((error) => {
                return error
            })

    }

    componentDidUpdate(p, s) {
        console.log(s)
        console.log(this.state)
    }
   
    render() {
        const spin = (
            <div className='d-flex justify-content-center'>
                <p>No Results Found</p>
                <Spinner style={{ width: '3rem', height: '3rem' }} />
            </div>
        )
        console.log(this.state)
        return <>
            <div className='container-fluid ccontainHeight'>
                <hr></hr>
                <div className='row'>
                </div>
                <div className='row'>
                    <div className="col-2">
                        <p>Search Results for {query.toUpperCase()}</p>
                    </div>
                    <div className="col-8">
                        {
                            this.state.data === false ? spin : <SearchResults resultsReturned={this.state.dataSet} click={this.handleClick} clickLoad={this.handleLoadMore} />
                        }
                    </div>
                    
                    <div className="col-2"></div>
                </div>
            </div>
        </>

    }
}

export default withRouter(SearchContainer);

