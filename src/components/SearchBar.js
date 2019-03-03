import React from 'react';
import './SearchBar.css';
import {withRouter} from 'react-router-dom'

class SearchBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            input:''
        }
    }
    handleInputChange = e => { 
        const searchInput = e.target.value;
            this.setState({input:searchInput})
    }
     handleSubmit = e =>{ 
            if(e.keyCode === 13){
             e.preventDefault();
           const searchInput = e.target.value;
            this.props.history.push(`/search/${searchInput}`);
            }
  
    }
    handleClick = e =>{ 
         if(e.target.value === this.state.input){
              const searchInput = e.target.value;
                 this.props.history.push(`/search/${searchInput}`);
         }
    }
    render(){
        return (
            <>
            <form className="form-inline" >
                <input id='hiddenInput' className="form-control mr-sm-2" type="text" placeholder="Your Favorite Video Is One Click Away" aria-label="Search"  onChange={this.handleInputChange} onKeyDown={this.handleSubmit}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.handleClick} value={this.state.input}>Search</button>
                </div>
            </form>
            </>
        )
    }
   
}

export default withRouter(SearchBar);