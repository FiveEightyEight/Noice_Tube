import React, { Component } from 'react';
import axios from 'axios';
import './Video.css';
import DescriptionText from '../components/descriptionText';

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
                views: 0,
                description: '',
                channel: '',
                // publishedOn: 0000,
                // comments: [{}, {}],
            },
            expand: false,
        }
    }

    callAPI = (url, params) => {
        return axios({
            method: 'get',
            url,
            params,
        })
    }

    getVideoDescription = (id) => {
        const params = {
            part: 'id,snippet,statistics',
            key: 'AIzaSyBcCsdu9K95VsD2umeUKsC-Dj2F-GFgs08',
            id, // id param
        }
        return this.callAPI('https://www.googleapis.com/youtube/v3/videos', params)
    }

    updateDescription = (id) => {
        this.getVideoDescription(this.state.videoID)
            .then(response => {
                return response.data
            })
            .then(data => {
                const info = {
                    title: data.items[0].snippet.title,
                    description: data.items[0].snippet.description,
                    views: data.items[0].statistics.viewCount,
                    channel: data.items[0].snippet.channelTitle,
                }
                return info;
            })
            .then(info => {
                return this.setState({
                    videoInfo: info,
                });
            })
    }

    numberComma = (string) => {
        const str = string;
        let newString = '';
        for (let i = 0; i < str.length; i ++) {
            if (i % 3 === 0 && i !== 0) {
                newString = ',' + newString;    
            }
            const char = str[str.length - i - 1]
            newString = char + newString;
        }
        return newString;
    }

    handleDescription = e => {
        const toggle = !this.state.expand;
        this.setState({
            expand: toggle,
        })
    }

    componentDidMount() {
        const { video_id } = this.props.match.params;
        this.setState({
            videoID: video_id,
        }, _ => {
            this.updateDescription(this.state.videoID);
        })
    }

    render() {
        return (
            <div className='mt-5 container'>
                <div className='row'>

                    <div className='mx-auto align-self-center'>
                        <VideoPlayer value={'string'} id={this.state.videoID} />
                    </div>
                    <div className='mt-3 mx-auto align-self-center row'>
                        <p className='col-12'>
                            <span className='h2'>{this.state.videoInfo.title}</span>
                        </p>
                        <p className='col-12'>
                            <span className='h6 text-muted'>{this.numberComma(this.state.videoInfo.views)} views</span>
                        </p>
                        <hr />
                        <p className='col-12'>
                            <span className='h6'>{this.state.videoInfo.channel}</span>
                        </p>
                        <DescriptionText description={this.state.videoInfo.description} expand={this.state.expand} handleDescription={this.handleDescription}/>
                    </div>
                </div>
            </div>
        )
    }


}

export default Video;