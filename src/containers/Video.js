import React, { Component } from 'react';
import axios from 'axios';
import { getVideoDescription, numberComma } from '../services/main';
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
                views: 0,
                description: '',
                channel: '',
                // publishedOn: 0000,
                // comments: [{}, {}],
            }
        }
    }


    componentDidMount() {
        const { video_id } = this.props.match.params;
        getVideoDescription(video_id)
        .then(info => {
            this.setState({
                videoID: video_id,
                videoInfo: info,
            })
        })
    }

    render() {
        return (
            <div className='mt-5 container'>
                <div className='row'>

                    <div className='mx-auto align-self-center'>
                        <VideoPlayer value={'string'} id={this.state.videoID} />
                    </div>
                    <div className='mt-3 mx-auto align-self-center'>
                        <p>
                            <span className='h2'>{this.state.videoInfo.title}</span>
                        </p>
                        <p>
                            <span className='h6 text-muted'>{numberComma(this.state.videoInfo.views)} views</span>
                        </p>
                        <hr />
                        <p>
                            <span className='h6'>{this.state.videoInfo.channel}</span>
                        </p>
                        <p>
                            <span>{this.state.videoInfo.description}</span>
                        </p>
                    </div>
                </div>
            </div>
        )
    }


}

export default Video;