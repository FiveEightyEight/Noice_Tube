import React, { Component } from 'react';
import './Video.css';

const VideoPlayer = ({ id }) => {
    const link = `https://www.youtube.com/embed/${id}?autoplay=1&fs=1&origin=http://localhost:3000`;

    return (
        <iframe title='yt-video' type="text/html" width="640" height="360"
            src={link} frameBorder="0"></iframe>
    );
}


class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoID: 'MmOpzbBsr8E',
            videoInfo: {
                title: '',
                views: 000,
                description: '',
                channel: '',
                // publishedOn: 0000,
                // comments: [{}, {}],
            }
        }
    }

    callAPI = (url, params) => {
        return axios({
            method: 'get',
            url,
            params,
        })
    }

    getVideoDiscription = (id) => {
        const params = {
            part: 'id,snippet,statistics',
            key: 'AIzaSyBcCsdu9K95VsD2umeUKsC-Dj2F-GFgs08',
            id, // id param
        }
        return callAPI('https://www.googleapis.com/youtube/v3/videos', params)
    }

    componentDidMount() {
        this,getVideoDiscription(this.state.videoID)
        .then( response => {
            return response.data
        })
        .then( data => {
            const info = {
                title: data.items[0].snippet.title,
                description: data.items[0].snippet.description,
                views: data.items[0].statistics.viewCount,
                channel: data.items[0].snippet.channelTitle,
            }
            return info;
        })
        .then( info => {
            this.setState({
               videoInfo:  info,
            });
        })
    }

    render() {
        return (

            <div>
                <div className='mx-auto align-self-center'>
                    <VideoPlayer id='MmOpzbBsr8E' />
                </div>
                <p>
                    {this.state.videoInfo.description}
                </p>
            </div>
        )
    }


}

export default Video;